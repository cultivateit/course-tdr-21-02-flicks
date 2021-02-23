const getValue = name =>
  process.env[name] ??
  process.env['REACT_APP_' + name]

const getConfig = () => ({
  API_ENDPOINT: getValue('API_ENDPOINT'),

  BUILD_INFO_ARTIFACT_NAME: getValue('BUILD_INFO_ARTIFACT_NAME'),
  BUILD_INFO_ARTIFACT_VERSION: getValue('BUILD_INFO_ARTIFACT_VERSION'),
  BUILD_INFO_BUILD_DATE: getValue('BUILD_INFO_BUILD_DATE'),
  BUILD_INFO_COMMIT_ID: getValue('BUILD_INFO_COMMIT_ID'),
  BUILD_INFO_COMMIT_DATE: getValue('BUILD_INFO_COMMIT_DATE'),
})

export default getConfig()
