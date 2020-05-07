import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Jumbo = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Zug-Zug Investments</h1>
                    <h6 class="d-flex justify-content-end">Only the most important World of Warcraft Commodities</h6>
                <hr class="my-4"></hr>
                <div class="media">
                    <img 
                        src="https://i.warosu.org/data/tg/img/0457/11/1456740861193.png?__cf_chl_jschl_tk__=845799104caa0759e627f7daf171d3185c85662b-1588805241-0-AXTuzQ3wJ1jkI8n69hcd9QHFxldxsI0gtNnJTLLSOJ_OpWjzlR4edFlr4GIM5TTKwGbwc2RaECZ0tKU3xy6xYWqQnFrXhO9bVpjhv_OtSAu7loaBpI85UyLTrUdagvl-xEtLD31e9_oSdHp7eacwrKieuRabc34htVOW_2SNlFBoZXRviiJcYQ5vSQCmhSn2LSC0JJ5WBMQ5lRvcTbNY0BLI4ulpI1MwJjXlWmkDts6vTbpo7D3rMD0vlmeck7nHWn5Pp3qpHmtWqt6vyE7Y5JINz-7Y8y0Mlg5faUXmgPBIetvyqiZ2W29qX2zvwRQFboQXjZ-GOzDg9dfLDHMbhJQ" 
                        fluid 
                        alt="orc in suit"
                    />
                    <div class="media-body">
                    </div>
                </div>
            </Container>
        </Jumbotron>
    )
}
export default Jumbo