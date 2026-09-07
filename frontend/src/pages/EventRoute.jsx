import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MarylandLandingPage from '@/pages/MarylandLandingPage';
import { fetchEventPage } from '@/lib/eventPages';

// /:slug catch-all for auto-generated event landing pages. Static routes are
// matched first by the router, so this only sees URLs nothing else claims.
export default function EventRoute() {
  const { slug } = useParams();
  const [state, setState] = useState({ status: 'loading', page: null });

  useEffect(() => {
    let alive = true;
    setState({ status: 'loading', page: null });
    fetchEventPage(slug)
      .then((page) => alive && setState({ status: page ? 'ok' : 'missing', page }))
      .catch(() => alive && setState({ status: 'missing', page: null }));
    return () => {
      alive = false;
    };
  }, [slug]);

  if (state.status === 'loading') return <div className="min-h-screen bg-black" />;
  if (state.status === 'missing') return <Navigate to="/" replace />;
  return <MarylandLandingPage page={state.page} />;
}
