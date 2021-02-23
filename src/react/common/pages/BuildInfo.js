import PropTypes from 'prop-types'

const rowPropTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const Row = ({ title, value }) => (
  <tr>
    <th><b className='text-uppercase'>{title}:</b></th>
    <td className='pl-3'>{value}</td>
  </tr>
)

Row.propTypes = rowPropTypes

const buildInfoPropTypes = {
  artifactName: PropTypes.string,
  artifactVersion: PropTypes.string,
  buildDate: PropTypes.string,
  commitId: PropTypes.string,
  commitDate: PropTypes.string,
}

const BuildInfo = ({
  artifactName = 'n/a',
  artifactVersion = 'n/a',
  buildDate = 'n/a',
  commitId = 'n/a',
  commitDate = 'n/a',
}) => (
  <div className='alert alert-info' role='alert'>
    <h4 className='alert-heading'>Build Info</h4>
    <table className='m-auto'>
      <tbody>
        <Row title='Artifact Name' value={artifactName} />
        <Row title='Artifact Version' value={artifactVersion} />
        <Row title='Build Date' value={buildDate} />
        <Row title='Commit ID' value={commitId} />
        <Row title='Commit Date' value={commitDate} />
      </tbody>
    </table>
  </div>
)

BuildInfo.propTypes = buildInfoPropTypes

export default BuildInfo
