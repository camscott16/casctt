import Head from 'next/head'

function header() {
	return (
	  <div>
        <Head>
	    <title>My page title</title>
        </Head>
        <p>Hello world!</p>
	  </div>
  )
}

export default header;