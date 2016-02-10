backend default {
    .host = "127.0.0.1";
    .port = "9090";
}

sub vcl_recv {
	# rec.*
    if (req.request == "DELETE") {
        error 750 "Error name";
        # followed by vcl_error
    }
    if (req.request == "POST") {
    	# bypass varnish just this once during this connection
    	# followed by vcl_pass
    	return (pass);
    }
    if (req.request == "PUT") {
    	# bypass varnish forever.. ?
    	# followed by vcl_pipe
    	return (pipe);
    }
    if (req.http.test-header == "teapot") {
        error 418 "I'm a Teapot";
    }
    if (req.http.test-header == "bad-server") {
        error 500;
    }

    if (req.http.cache-control == "no-store") {
        return (pass);
    }

    return (lookup);
}


sub vcl_error {
    if (obj.status == 418) {
        # FIXME Why is this causing too many redirects?
        # set obj.http.Location = "/teapot";
        # set obj.status = 302;
        return(deliver);
    }

    else {
        return(deliver);
    }
}
