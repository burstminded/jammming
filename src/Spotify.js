const clientId = "a40da5c2d6f14b0ba1a0c0eb7a19a393"; // Insert client ID here.
const redirectUri = "https://burstminded.github.io/jammming/"; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
const scope = "user-read-private user-read-email";
const authUrl = new URL("https://accounts.spotify.com/authorize");

const generateRandomString = (length) => {
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const values = crypto.getRandomValues(new Uint8Array(length));
	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async (plain) => {
	const encoder = new TextEncoder();
	const data = encoder.encode(plain);
	return window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input) => {
	return btoa(String.fromCharCode(...new Uint8Array(input)))
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
};

const Spotify = {
	accessToken: null,
	async authorize() {
		if (this.accessToken) {
			return this.accessToken;
		}
		const codeVerifier = generateRandomString(64);
		const hashed = await sha256(codeVerifier);
		const codeChallenge = base64encode(hashed);

		window.localStorage.setItem("code_verifier", codeVerifier);

		const params = {
			response_type: "code",
			client_id: clientId,
			scope,
			code_challenge_method: "S256",
			code_challenge: codeChallenge,
			redirect_uri: redirectUri,
		};

		authUrl.search = new URLSearchParams(params).toString();
		window.location.href = authUrl.toString();
		const urlParams = new URLSearchParams(window.location.search);
		let code = urlParams.get("code");
		return code;
	},

	async getAccessToken(code) {
		if (this.accessToken) {
			return this.accessToken;
		}
		const url = "https://accounts.spotify.com/api/token";
		let codeVerifier = localStorage.getItem("code_verifier");

		const payload = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				client_id: clientId,
				grant_type: "authorization_code",
				code,
				redirect_uri: redirectUri,
				code_verifier: codeVerifier,
			}),
		};
		const body = await fetch(url, payload);
		const response = await body.json();
		localStorage.setItem("access_token", response.access_token);
		localStorage.setItem("refresh_token", response.refresh_token);
		this.accessToken = response.access_token;
	},

	async getRefreshToken() {
		const refreshToken = localStorage.getItem("refresh_token");
		const url = "https://accounts.spotify.com/api/token";

		const payload = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				grant_type: "refresh_token",
				refresh_token: refreshToken,
				client_id: clientId,
			}),
		};
		const body = await fetch(url, payload);
		const response = await body.json();

		localStorage.setItem("access_token", response.this.accessToken);
		localStorage.setItem("refresh_token", response.refreshToken);
	},

	refreshToken() {
		setTimeout(() => {
			this.getRefreshToken();
			console.log("refreshed");
		}, 3600000);
	},

	search(term) {
		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (!jsonResponse.tracks) {
					return [];
				}
				return jsonResponse.tracks.items.map((track) => ({
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					uri: track.uri,
				}));
			});
	},

	savePlaylist(name, trackUris) {
		if (!name || !trackUris.length) {
			return;
		}
		const headers = { Authorization: `Bearer ${this.accessToken}` };
		let userId;

		return fetch("https://api.spotify.com/v1/me", { headers: headers })
			.then((response) => response.json())
			.then((jsonResponse) => {
				userId = jsonResponse.id;
				return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
					headers: headers,
					method: "POST",
					body: JSON.stringify({ name: name }),
				})
					.then((response) => response.json())
					.then((jsonResponse) => {
						const playlistId = jsonResponse.id;
						return fetch(
							`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
							{
								headers: headers,
								method: "POST",
								body: JSON.stringify({ uris: trackUris }),
							}
						);
					});
			});
	},
};

export default Spotify;
