### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    # this should follow ruby naming conventions and be written as check_for_ace
    if card.value = 1
      # == should be used here
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # typo - should read def not dif, also need a comma between card1 and card2
  if card1.value > card2.value
    # the if statement should be indented inside the function
    return card.name
    # should be card1 to specify which card to return, also no name property is defined on card.rb
  else
    card2
    # should be return card2
  end
end
end
# because of "dif" typo one of the ends is not matching up to beginning of function and the other end should be at the bottom of the file to end the class

def self.cards_total(cards)
  total
  # total should be given a starting value of 0
  for card in cards
    total += card.value
    return "You have a total of" + total
    # cannot add a string and an integer together and the return should be outside the for loop after the end on line 46
  end
end


```
