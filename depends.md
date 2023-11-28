


# depends WINDOWS

 - cd server
 - npm init -y
 - npm install -D tsx
 - npm install @types/node typescript
 - npm install @types/express express @types/cors cors
 - npx tsc --init
 - npm install prisma --save-dev
 - npm install @prisma/client
 - npx prisma init --datasource-provider sqlite
 - npx prisma migrate dev --table init
 - npx prisma migrate dev
 - npm create vite@laest
 - npm install -D tailwindcss postcss autoprefixer
 - npx tailwindcss init