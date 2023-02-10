import React from 'react'

const homepage = () => {
  return (
    <div className='form__container'>
        <form>
          <input className='item__input' type='text' id='item-input' placeholder='Search for items to borrow...'/>
          <input className='search__btn' type="submit" placeholder='Search'/>
        </form>
    </div>
  )
}

export default homepage