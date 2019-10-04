// IMPORT MODULES under test here:
// import example from '../src/example.js';]
import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

test('Should return draw if user is rock and comp is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'rock';
    const compThrow = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'draw');
});

test('Should return draw if user is paper and comp is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'paper';
    const compThrow = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'draw');
});

test('Should return draw if user is scissors and comp is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'scissors';
    const compThrow = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'draw');
});

test('Should return lose if user is rock and comp is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'rock';
    const compThrow = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'lose');
});

test('Should return lose if user is paper and comp is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'paper';
    const compThrow = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'lose');
});

test('Should return lose if user is scissors and comp is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'scissors';
    const compThrow = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'lose');
});

test('Should return win if user is rock and comp is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'rock';
    const compThrow = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'win');
});

test('Should return win if user is paper and comp is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'paper';
    const compThrow = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'win');
});

test('Should return win if user is scissors and comp is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'scissors';
    const compThrow = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    let checkedResult = checkResult(userThrow, compThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkedResult, 'win');
});