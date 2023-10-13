# serve-json

A simple HTTP server that serves JSON files.

## Installation

```bash
# Install pacakges with pnpm
pnpm i
```

## Usage

```bash
# start the server at the default port of 3008
pnpm dev
```

## Adding JSON data

Add a single JSON file to the `data` directory. The file will be called at the root of the server and as a wildcard route.

If you want to use more JSON files and treat the server as like an api, you may add files to `data/api` and they will be called at `/api/<filename>`.
