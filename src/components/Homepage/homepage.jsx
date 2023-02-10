import React from 'react'

const homepage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <div className='form__container'>
        <form>
          <input className='item__input' type='text' id='item-input' placeholder='Search for items to borrow...'/>
          <button className='search__btn' type="submit" placeholder='Search'/>
        </form>

      </div>
    </div>
  )
}

export default homepage