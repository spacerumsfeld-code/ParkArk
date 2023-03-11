### Development ###

dev:
	npx nx run-many --target=serve --projects=api,web --parallel --maxParallel=2

### E2E Testing ###

test:
	npx nx run web-e2e:e2e