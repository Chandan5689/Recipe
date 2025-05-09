import React from 'react'
import CategoryBox from '../../pages/FeaturedRecipes/CategoryBox'
import PopularCategories from '../../pages/PopularCategories/PopularCategories'
import Hero from '../Hero'

function Home() {
  return (
    <div>
        <Hero bgImage={'https://readdy.ai/api/search-image?query=Modern%20kitchen%20with%20fresh%20ingredients%20spread%20across%20a%20marble%20countertop.%20Herbs%2C%20vegetables%2C%20and%20cooking%20utensils%20arranged%20beautifully.%20Soft%20natural%20light%20streaming%20through%20large%20windows%2C%20creating%20a%20bright%2C%20airy%20atmosphere.%20Professional%20food%20photography%20setup%20with%20warm%2C%20inviting%20colors%20and%20textures.&width=1440&height=500&seq=11&orientation=landscape'}/>
       <CategoryBox />
       <PopularCategories />
       
    </div>
  )
}

export default Home