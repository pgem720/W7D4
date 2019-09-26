# json.pokemon do
#   json.id @poke.id
#   json.name @poke.name
#   json.attack @poke.attack
#   json.defense @poke.defense
#   json.moves @poke.moves
#   json.poke_type @poke.poke_type
#   json.image_url asset_path(@poke.image_url)
#   json.item_ids @poke.item_ids
# end

json.pokemon @poke, partial: 'poke', as: :poke

json.items do
    @poke.items.each do |item|
       json.partial! 'api/items/item', item: item
    end
end
  