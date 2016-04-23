#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)

echo -e "Host 159.203.225.145\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

# Import the SSH deployment key

openssl aes-256-cbc -K $encrypted_401c0a172731_key -iv $encrypted_401c0a172731_iv -in deploy-key.enc -out deploy-key -d
rm deploy-key.enc # Don't need it anymore
chmod 600 deploy-key

mv deploy-key ~/.ssh/id_rsa
