#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)

echo -e "Host 159.203.225.145\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

# Import the SSH deployment key
- openssl aes-256-cbc -K $encrypted_401c0a172731_key -iv $encrypted_401c0a172731_iv -in deploy_key.enc -out deploy_key -d
rm deploy_key.enc # Don't need it anymore
chmod 600 deploy_key
mv deploy_key ~/.ssh/id_rsa
