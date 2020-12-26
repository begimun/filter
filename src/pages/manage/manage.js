import Item from './item';

const  Manage =({data }) => {
    const  handleClick = () => {
        console.log('Клик ')
    }
}

return (
    <section className="manage">
            <div className="manage__top">
                <div className="row">
                    <div className="manage__filter">Filter</div>
                    <label className='manage__search'>
                        <input type="text" placeholder="Search users by name "/>
                        
                    </label>
                </div>
            </div>

            <button>
                     
            </button>
    </section>
)

export default Manage;