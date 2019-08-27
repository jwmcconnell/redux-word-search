import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getFirstWords, getTopWordsByTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = (state, props) => ({
  words: getFirstWords(state, props.match.params.count || 1000)
  // words: getTopWordsByTerm(state)
});

export default connect(
  mapStateToProps
)(Words);
