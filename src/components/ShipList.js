import React from 'react';

function ShipList(props) {
	return (
		<div className='main_container'>
			<div className='search_container'>
				<input
					name='search'
					id='search'
					type='text'
					placeholder='Search ships'
					value={props.searchTerm}
					onChange={props.handleSearchTerm}
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
					/>
				</svg>
			</div>
			<div className='total_count'>
				TOTAL COUNT : {props.searchResult.length}
			</div>
			{props.searchResult.length > 0 ? (
				<div className='ship_list_container'>
					{props.searchResult.map((item, index) => {
						return (
							<div key={index} className='ship_list_item'>
								<div className='item_image_container'>
									<img src={item.image} alt={item.name + ' image'} />
								</div>
								<div className='item_data_container'>
									<p className='item_name'>{item.name}</p>
									<p className='item_port'>
										PORT :{' '}
										<span
											style={{
												paddingLeft: '20px'
											}}>{`${item.home_port}`}</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div
					className='ship_list_container'
					style={{ display: 'flex', justifyContent: 'center' }}>
					No Result Found
				</div>
			)}
		</div>
	);
}

export default ShipList;
