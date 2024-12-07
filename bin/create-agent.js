#!/usr/bin/env node

// Use nostr-tools to generate secure keypair
import { generateSecretKey, getPublicKey } from 'nostr-tools/pure';

// Generate cryptographically secure private key (32 bytes)
const privkey = generateSecretKey();

// Convert Uint8Array to hex string
const privkeyHex = Array.from(privkey)
  .map(b => b.toString(16).padStart(2, '0'))
  .join('');

// Derive public key using Schnorr signatures (32 bytes, hex encoded)
const pubkey = getPublicKey(privkey);

// Cool console message
console.error('\x1b[36m%s\x1b[0m', '🤖 Creating new agent...');
console.error('\x1b[33m%s\x1b[0m', '⚠️  Keep your private key secret!');
console.error('');

// Output JSON with both keys
console.log(JSON.stringify({
  privkey: privkeyHex,
  pubkey: pubkey
}, null, 2)); 