import {Component} from 'react'

import {
  BgContainer,
  InputBody,
  Heading,
  InputCard,
  Paragraph,
  TextInput,
  Button,
} from './componentStyle'

class EditableInput extends Component {
  state = {inputText: '', isSaved: false}

  onClickOfSaveOrEdit = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onInputChange = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText, isSaved} = this.state
    const addButtonText = isSaved ? 'Edit' : 'Save'
    console.log(addButtonText)

    return (
      <BgContainer>
        <InputBody>
          <Heading>Editable Text Input</Heading>
          <InputCard>
            {isSaved ? (
              <Paragraph>{inputText}</Paragraph>
            ) : (
              <TextInput
                type="text"
                value={inputText}
                onChange={this.onInputChange}
              />
            )}
            <Button type="button" onClick={this.onClickOfSaveOrEdit}>
              {addButtonText}
            </Button>
          </InputCard>
        </InputBody>
      </BgContainer>
    )
  }
}

export default EditableInput
