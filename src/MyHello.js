import PropTypes from 'prop-types'

export default function MyHello(props) {
  return (
    <div>こんにちは、{props.myName}さん</div>
  );

}
MyHello.propTypes = {
  myName: PropTypes.string.isRequired
};
