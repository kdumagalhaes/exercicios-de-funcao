function classmate(score) {
    let correctedScore = correct(score)
  if (correctedScore < 40) {
    console.log(`Disaproved. Score: ${correctedScore}`);
  } else {
    console.log(`Approved. Score: ${correctedScore}`);
  }
}

function correct(score) {
    if (score % 5 > 2) {
        return score + (5 - (score % 5))
    } else {
        return score
    }
}

classmate(50)