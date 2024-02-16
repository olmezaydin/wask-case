# Aydın ÖLMEZ - CASE

## Requirements
- Docker Setup
  - Docker
  - Docker-compose
  - Make
- Pure Setup
  - Php 8.3
  - Node 18

## Setup And Using
- Docker
  - Start
    ```
    make start
    ```
    - PHP
      - Encoded data
        ```
        make encode_php email=a@b.com
        ```
      - Decoded data
        ```
        make decode_php hash=hash_code
        ```
    - NODE
      - Encoded data
        ```
        make encode_node email=a@b.com
        ```
      - Decoded data
        ```
        make decode_node hash=hash_code
        ```
  - Stop And Remove
    ```
    make stop
    ```
- Pure
  - PHP
    - Encoded data
      ```
      php ./php/encode.php a@b.com
      ```
    - Decoded data
      ```
      php ./php/decode.php hash_code
      ```
  - NODE
    - Encoded data
      ```
      node ./node/encode.js a@b.com
      ```
    - Decoded data
      ```
      node ./node/decode.js hash_code
      ```