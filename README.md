# create-agent 🤖

A command-line tool to generate Agent keypairs with various encodings.

## Installation 📦

```bash
npm install -g create-agent
```

Or simply run:

```bash
npm create agent
```

## Usage 🚀

Simply run:

```bash
create-agent
```

The tool will generate a new Agent keypair and display it in various formats.

## Output Fields 🔑

The tool generates a JSON object containing:

### Private Key Formats

#### `privkey`

- 32-byte private key in hexadecimal format
- The private key of the Agent
- Used to sign Nostr events
- Example:
  ```
  "7f7168866801e2003bfc6507f881783e23587d35ece7b1f1981891b9c9c26c55"
  ```
- ⚠️ **Keep this secret!**

#### `nsec`

- Bech32-encoded private key (starts with `nsec`)
- Human-friendly format
- Example:
  ```
  "nsec1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3vk8rx"
  ```
- ⚠️ **Keep this secret!**

### Public Key Formats

#### `pubkey`

- 32-byte public key in hexadecimal format
- Derived from private key using Schnorr signatures
- Your identity in the Nostr network
- Example:
  ```
  "06444f34c6c5f973d74b3c78214fd0bf694f0cf459651b2ffe651fa08ba00bf4"
  ```

#### `npub`

- Bech32-encoded public key (starts with `npub`)
- Human-friendly format for sharing
- Example:
  ```
  "npub1sg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63q0uf63m"
  ```

## Example Output 📝

```json
{
  "privkey": "7f7168866801e2003bfc6507f881783e23587d35ece7b1f1981891b9c9c26c55",
  "pubkey": "06444f34c6c5f973d74b3c78214fd0bf694f0cf459651b2ffe651fa08ba00bf4",
  "nsec": "nsec1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3vk8rx",
  "npub": "npub1sg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63q0uf63m"
}
```

## Security Notice 🔒

**Never share your private key!** Anyone with access to your private key (`privkey` or `nsec`) can:

- ✍️ Post messages as you
- 👤 Update your profile
- 👥 Follow/unfollow other users
- 📨 Send encrypted messages in your name

## About Nostr 📡

Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized social networking protocol. Each user is identified by a public key, and all actions are signed using their corresponding private key.

## Development 🛠️

```bash
git clone https://github.com/melvincarvalho/create-agent.git
cd create-agent
npm install
```

## License 📄

MIT

---

Made with ❤️ for the [Agentic Alliance](https://agenticalliance.com/) community
