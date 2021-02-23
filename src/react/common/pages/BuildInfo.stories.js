import BuildInfo from './BuildInfo'

const buildInfo = {
  artifactName: 'artifact-name',
  artifactVersion: '1.2.3',
  buildDate: '2001-02-03T04:05:06.007+08:09',
  commitId: '01234568789abcdef01234568789abcdef012345',
  commitDate: '2001-02-03T04:05:06.007+08:09',
}

export default {
  title: 'common/pages/BuildInfo',
  component: BuildInfo,
}

export const Empty = () => <BuildInfo />
export const Populated = () => <BuildInfo {...buildInfo} />

