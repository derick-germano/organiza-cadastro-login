/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['static.preparaenem.com', 'uploads.metropoles.com', 'midias.agazeta.com.br', 'youprime.com.br'], // Adicione aqui o seu hostname
  },
});


// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
