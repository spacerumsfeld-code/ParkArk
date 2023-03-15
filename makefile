### Development ###

dev:
	doppler run -- npx nx run-many --target=serve --projects=api,web --parallel --maxParallel=2

dev-web:
	doppler run -- npx nx run web:serve

dev-admin:
	doppler run -- npx nx run admin:serve

### E2E Testing ###

test:
	doppler run -- npx nx run web-e2e:e2e