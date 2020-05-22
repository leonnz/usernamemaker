import Head from 'next/head';
import { useState } from 'react';
import nameGen from '../service/namegen';

export default function Home() {
  const [name, setName] = useState('');

  const getName = () => {
    setName(nameGen());
  };

  const copyName = () => {
    const copyText = document.getElementById('nameInput');
    copyText.select();
    document.execCommand('copy');
  };

  return (
    <div className="container">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <div className="row">
        <div className="col">
          <div className="container" style={{ height: '100px' }}></div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="container text-light bg-dark rounded p-5"
            style={{ width: '700px' }}
          >
            <h1 className="text-center">Username generator</h1>
            <p>Arise ...</p>
            <div className="input-group mb-3">
              <input
                readOnly={true}
                id="nameInput"
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={name}
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-info "
                  type="button"
                  id="button-addon2"
                  onClick={copyName}
                >
                  Copy
                </button>
              </div>
            </div>

            <p>... go forth and conquer!</p>
            <div className="text-center pt-3">
              <button type="button" className=" btn btn-info" onClick={getName}>
                Generate name
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="container">
            <p
              className="text-center text-muted "
              style={{ textAlign: 'bottom' }}
            >
              Did you find this tool useful/fun/feeling nice?
              {'  '}
              <a
                className="text-dark"
                target="blank"
                title="Paypal link"
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=UHK5G657T7SJY&currency_code=USD&source=url"
              >
                Buy me a coffee
              </a>{' '}
              :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
