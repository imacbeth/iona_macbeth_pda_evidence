require_relative '../testing_task_2.rb'
require_relative '../card.rb'
require 'minitest/autorun'
require('minitest/rg')

class TestCard < MiniTest::Test

  def setup
    @card1 = Card.new("Clubs", 1)
    @card2 = Card.new("Hearts", 10)
    @card_game = CardGame.new
    @cards = [@card1, @card2]
  end

  def test_check_for_ace__True
    assert_equal(true, @card_game.check_for_ace(@card1))
  end

  def test_check_for_ace__False
    assert_equal(false, @card_game.check_for_ace(@card2))
  end

  def test_highest_card
    assert_equal(10, @card_game.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 11", CardGame.cards_total(@cards))
  end
end
