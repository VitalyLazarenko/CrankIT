// custom pages/404.js !!
import FullWidthContainer from "../components/FullWidth.component/FullWidth";

export default function Error() {
  return (
    <>
      <FullWidthContainer background={''}>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{
            color: '#FFF',
            textAlign: 'center',
            textShadow:
              `0 0 7px #E5BE2C,
               0 0 10px #E5BE2C,
               0 0 21px #E5BE2C,
               0 0 42px #E5BE2C,
               0 0 82px #E5BE2C,
               0 0 92px #E5BE2C,
               0 0 102px #E5BE2C,
               0 0 151px #E5BE2C;`
          }}
          >
            404 <br/>
            Something went wrong
          </h1>
        </div>
      </FullWidthContainer>
    </>
  )
}
