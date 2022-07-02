module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
          //StorageClass: env('AWS_S3_STORAGE_CLASSES') // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
        },
        logger: console // Only if you want to `stdout` logs
      }
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 0,
          maxAge: 60000,
        },
      },
      strategy: {
        contentTypes: [
          {
            contentType: "api::matricula.matricula",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/matriculas', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: false, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          {
            contentType: "api::usuario.usuario",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/usuarios', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: false, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          {
            contentType: "api::curso.curso",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/cursos', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: false, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          {
            contentType: "api::modulo.modulo",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/modulos', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: false, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          {
            contentType: "api::certificado.certificado",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/certificados', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: false, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          {
            contentType: "api::conteudo-concluido.conteudo-concluido",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/conteudos-concluidos', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: true, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          {
            contentType: "api::modulo-concluido.modulo-concluido",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/modulos-concluidos', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: false, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          {
            contentType: "api::curso-concluido.curso-concluido",
            routes: /* @type {CacheRouteConfig[]} */ [
              {
                path: '/v1/cursos-concluidos', // note that we set the /api prefix here
                method: 'GET', // can be omitted, defaults to GET
                hitpass: false, // overrides default hitpass for this route
                keys: /* @type {CacheKeysConfig} */ {
                  useQueryParams: true,
                }
              },
            ],
          },
          // list of Content-Types UID to cache
        ],
      },
    },
  },
 });
