module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './src',
            '@atoms':'./src/components/atoms',
            "@molecules":'./src/components/molecules',
            "@organisms":"./src/components/organisms",
            "@pages":"./src/components/pages",
            "@templates":"./src/components/templates",
            "@assets-image":"./src/assets/images/",
            "@assets-icon":"./src/assets/icons/",
            "@navigation-service":"./src/navigation/navigation-services.tsx",
            "@navigation":"./src/navigation/"
          },
        },
      ],
    ],
  };
};
