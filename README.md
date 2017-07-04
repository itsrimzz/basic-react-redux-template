# hu17-react

Hello Linkers. Please follow the following commands to get started

## Setup and Development

```
npm install
npm start
```

## Running Tests

```
npm run test
```

## Production Build and deploying on S3

```
npm run build
```
This will create bundled files in a folder called build. Now to deploy your code, run the following command

```
cd build
aws s3 sync . s3://<your-bucket-name>
```
