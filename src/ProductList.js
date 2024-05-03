import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './action';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { List, ListItem, ListItemText } from '@mui/material';

const ProductList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products);
    const [activeTab, setActiveTab] = useState('table');
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ]

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <button onClick={() => setActiveTab('table')}>Table view</button>
            <button onClick={() => setActiveTab('list')}>List view</button>
            {activeTab === 'table' &&
                <div>
                    <Table dataSource={data.products} columns={columns} />
                </div>
            }
            {activeTab === 'list' &&
                <div>
                    <List>
                        {data.products.map((product) => (
                            <ListItem key={product.id}>
                                <ListItemText
                                    primary={product.title}
                                    secondary={`Price: ${product.price}, Description: ${product.description}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            }
        </div>
    );
};

export default ProductList;