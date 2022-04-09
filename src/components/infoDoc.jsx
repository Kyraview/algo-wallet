import './infoDoc.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function InfoDoc() {
    return(
        <div align='center' style={{paddingLeft:'25px'}} className='infoDoc'>
            <Tabs className="mb-3">
                <Tab eventKey="overview" title="Overview">
                    <h5 style={{fontSize:'48px'}}>SnapAlgo</h5>
                    <p>SnapAlgo is a set of methods callable on MetaMask Flask to access the Algorand blockchain, here is a wallet utilizing SnapAlgo. SnapAlgo is currently only on the developer version of MetaMask, MetaMask Flask. However, SnapAlgo will be available to the consumer version of MetaMask by the end of the year. You can download MetaMask Flask here:<br/><a href='https://metamask.io/flask/'>https://metamask.io/flask/</a></p>
                </Tab>
                <Tab eventKey="installation" title="Installation">
                    <h5 style={{fontSize:'48px'}}>Requires MetaMask Flask</h5>
                    <p>1. Create a new Chrome account without MetaMask installed; or if MetaMask is currently installed, uninstall it and install MetaMask Flask.</p>
                    <p>2. Install MetaMask Flask at <a href='https://metamask.io/flask/'>https://metamask.io/flask/</a></p>
                    <p>3. Press Connect and follow the prompts.</p>
                </Tab>
                <Tab eventKey="apps" title="Apps">
                    <h5 style={{fontSize:'48px'}}>Applications</h5>
                    <p>SwapAlgo (In Progress):<br/><a href='https://algoswap.netlify.app/'>Website</a><br/><a href='https://github.com/TheRealDeathEye/algo-swap'>GitHub</a></p>
                    <p>Proof of Concept:<br/><a href='https://snapalgo02.paulfears.repl.co/'>Website</a><br/><a href='https://replit.com/@paulfears/snapalgo02#index.html'>Code</a></p>
                </Tab>
                <Tab eventKey="Develop" title="Develop">
                    <h5 style={{fontSize:'48px'}}>Development</h5>
                    <p>Since SnapAlgo is a developer framework, we will be rolling out developer documentation in the coming weeks. We strive to make development with SnapAlgo as seamless as possible, so in the meantime, you can find our code at <a href='https://www.npmjs.com/package/algorand'>npm:algorand</a> or <a href='https://github.com/paulfears/snapalgo'>GitHub</a>.</p>
                </Tab>
            </Tabs>
        </div>
    );
}