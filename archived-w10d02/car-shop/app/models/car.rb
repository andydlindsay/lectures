class Car < ApplicationRecord
  belongs_to :make
  belongs_to :model
  belongs_to :style
  belongs_to :trim
end
