import React, { useState, useEffect } from 'react';
import { mockApi } from '../../utils/mock';
import { Expanded } from '../../components/Expanded/Expanded';
import { Search } from '../../components/Search/Search';
import { orderByDate } from '../../utils/functions';

export const ExamplePage = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [viewData, setViewData] = useState([]);
    const [countOrder, setCountOrder] = useState(0);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true);

        try {
            const results = await mockApi();
            setResults(results);
            setViewData(orderByDate(results, true));
            /// сразу по дате не сортируем, то
            /// setViewData(results)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const orderDate = () => {
        if (countOrder >= 1) {
            setViewData(orderByDate(viewData, true));
            setCountOrder(0)
            return;
        }
        setViewData(orderByDate(viewData));
        setCountOrder(countOrder + 1)
    }

    const search = (searchNumber) => {
        if (searchNumber !== '') {
            setViewData(viewData.filter(data => data.cardNumber.toString().match(searchNumber) ? data : null));
        } else {
            setViewData(results);
        }
    }
    return (
        <div>
            {!viewData && loading &&
                //TODO loader
                <div>
                    LOADING
                </div>
            }
            {viewData && <Search setSearch={(event) => search(event.target.value)} />}
            {viewData && !loading &&
                viewData.map((result) => {
                    return <Expanded
                        key={`${result.amount}_${result.dateTo}`}
                        title={result.title}
                        cardNumber={result.cardNumber}
                        dateTo={result.dateTo}
                        amount={result.amount}
                        currency={result.currency}
                        texts={result.texts}
                        reOrder={orderDate}
                    />
                })
            }
        </div>
    );
};