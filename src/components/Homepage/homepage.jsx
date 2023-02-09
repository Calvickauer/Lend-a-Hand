import React from 'react'

const homepage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <div className='form__container'>
        <form>
          <label className='search__label'>Search for tools!</label>
          <input className='item__input' type='text' id='item-input' placeholder='Search items'></input>
        </form>

      </div>
    </div>
  )
}

export default homepage