import { render, screen } from '../../../test/utils/rtl'
import BuildInfo from './BuildInfo'

const buildInfo = {
  artifactName: 'artifact-name',
  artifactVersion: 'artifact-version',
  buildDate: '2001-02-03T04:05:06.007+08:09',
  commitId: 'COMMIT_ID',
  commitDate: '2002-03-04T05:06:07.008+09:10',
}

describe('BuildInfo', () => {
  it('displays heading', () => {
    render(<BuildInfo {...buildInfo} />)
    expect(screen.getByRole('alert')).toHaveTextContent('Build Info')
  })

  it('displays artifact name', () => {
    render(<BuildInfo {...buildInfo} />)
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent(/Artifact Name/)
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent(buildInfo.artifactName)
  })

  it('displays artifact version', () => {
    render(<BuildInfo {...buildInfo} />)
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent(/Artifact Version/)
    expect(screen.getAllByRole('cell')[1]).toHaveTextContent(buildInfo.artifactVersion)
  })

  it('displays build date', () => {
    render(<BuildInfo {...buildInfo} />)
    expect(screen.getAllByRole('columnheader')[2]).toHaveTextContent(/Build Date/)
    expect(screen.getAllByRole('cell')[2]).toHaveTextContent(buildInfo.buildDate)
  })

  it('displays commit id', () => {
    render(<BuildInfo {...buildInfo} />)
    expect(screen.getAllByRole('columnheader')[3]).toHaveTextContent(/Commit ID/)
    expect(screen.getAllByRole('cell')[3]).toHaveTextContent(buildInfo.commitId)
  })

  it('displays commit date', () => {
    render(<BuildInfo {...buildInfo} />)
    expect(screen.getAllByRole('columnheader')[4]).toHaveTextContent(/Commit Date/)
    expect(screen.getAllByRole('cell')[4]).toHaveTextContent(buildInfo.commitDate)
  })
})
