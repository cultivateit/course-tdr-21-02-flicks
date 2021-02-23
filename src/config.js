const getValue = name =>
  global?.env?.[name] ??
  global?.env?.['REACT_APP_' + name] ??
  process.env[name] ??
  process.env['REACT_APP_' + name]

const getConfig = () => ({
  api: {
    endpoint: getValue('API_ENDPOINT'),
  },
  buildInfo: {
    artifactName: getValue('BUILD_INFO_ARTIFACT_NAME'),
    artifactVersion: getValue('BUILD_INFO_ARTIFACT_VERSION'),
    buildDate: getValue('BUILD_INFO_BUILD_DATE'),
    commitId: getValue('BUILD_INFO_COMMIT_ID'),
    commitDate: getValue('BUILD_INFO_COMMIT_DATE'),
  },
})

export default getConfig()
