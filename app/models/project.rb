class Project < ApplicationRecord
<<<<<<< HEAD
 
  before_save do
    self.periodicity.gsub!(/[\[\]\"]/, "") if attribute_present?("periodicity")
  end

=======
>>>>>>> activeadmin models
  has_many :inspeccions, dependent: :destroy
   belongs_to :user, :optional => true

  
end
