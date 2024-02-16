start:
	docker-compose up -d --build --force-recreate

stop:
	docker-compose down --rmi all -v
	docker system prune -a -f --all
	docker system prune -a -f --volumes

exec_php:
	docker exec -it --user www-data wask-php sh

encode_php:
	docker exec --user www-data wask-php sh -c "php encode.php $(email)"

decode_php:
	docker exec --user www-data wask-php sh -c "php decode.php $(hash)"

exec_node:
	docker exec -it wask-node sh

encode_node:
	docker exec wask-node sh -c "node /app/encode.js $(email)"

decode_node:
	docker exec wask-node sh -c "node /app/decode.js $(hash)"