#!/usr/bin/env bash
set -e
cp -n .env.example .env || true
npm install
mkdir -p server/data
echo "Setup xong. Chạy: npm run dev:server"
