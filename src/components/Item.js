import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import CardMedia from '@material-ui/core/CardMedia';

import Dashboard from "../components/Dashboard";

// import PotDetails from "../components/PotDetails"
import { Link } from '@material-ui/core';





const styles = theme => ({
  card: {
    maxWidth: 345
  },
  actions: {
    display: 'flex'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class Item extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  };


  openDetails = ({item}) => {
    
  console.log("hello")
    
  }

  render () {
    const { classes, item } = this.props

    return (
      <Card style={{margin: '10px'}} className={classes.card} onClick={ event => this.openDetails({item})}>
        <CardHeader
          avatar={
            <Avatar aria-label='Recipe' className={classes.avatar}>
              {item.name[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.name}
          subheader='September 14, 2016'
        />
            <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFhUWGB4YGBgYGRkXIBcfHx0dGh0eHxkbICggIBonHRkYIjEhJSsrMC4uHx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS8tLS8tLS0tKy0tLS0tLS0tLy0vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAN8A4gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABQMEBgIHAQj/xABIEAACAQIEAwcBBAcGBAMJAAABAhEAAwQSITEFQVEGEyJhcYGRMiNCobEHFFJigpLBFTNDctHxJMLh8Bai0iU0U2Nzk6Oyw//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgQDBf/EACoRAAICAgEEAAUEAwAAAAAAAAABAhEDITEEEkFRImGRsfAyQlKBE3Gh/9oADAMBAAIRAxEAPwD3GiiigAooooAKKKKACivhNY7j/wCkPDWWNqyDiLw+5b1C/wCZth7kVMpKKtjUW+DZUk4z2sweFH219AeQkEmvKu0HaTFXQTjMWuGtna1aMMfItuT6D3rO4PFgk/qeFLtzu3dCfOWl2rNLqv4o7rB/JnpuN/ScWkYTCXLuujN4F9ZaPwmk+O7acRYathsMOsm4f+UfnWLK4m8GL4oqR/h2xk+DvzFQpwawyi4qPcIMMHJaeehMVnlmk+X9PxHVYorwaHFdsLp0ucXPLS0lsbecMaqjtggEHiOMbT9pv6LUKcIghreGUSNVIBC9dwasJwp1YqLa92288tNNP61zc0+Wy1H5HP8A4vtbfr+NH8b/ANRVuz2y/Z4rfX/Ots//ALJVX+yLmUoUXKPpPP8A2qG/wu4VBaypZToABqOhJ57/ADSUl4b+o+35GpwnbTFn+7x2Gu/57cH0lG/pTKz+kDGIB3uBS71azd39Fcf1Neb43g6eF3w8SNVQHflGWKiXAvbYi1iXttuqk5p5xr5eVdI5ZLiX1IeOL5R7Rwz9I2BuEJcdsPcOmW+pST5NsfmtZauqwlWDDqCCPkV+dP7ZxKp/xFq3fttpyn4/2pj2f41aRpweIfC3DvabVGPTI2n8pFd49VJfqX0ObwJ/pZ77RWC4Z2+a3C462FH/AMe1LJ/EN16ztW3wuKS4ge26up1DKZB960wyxmvhZwlCUeSaiiiuhAUUUUAFFFFABRRRQAUUUUAFFFFABSrtF2hsYO2bl94/ZUas56KvM0r7X9s7eDIsovfYlxK2l+6P2nP3V/OvIuNcUyXjdvE4jFvqqzItg7BZ0VB13P4Vny5+34VtnXHi7tvgedpu09/FoWvucJhRr3YaHccsxG3oJO221ZUY261s/qdnuLA3ulfE3mF6+ZrhsK/eC7ix3xI8KrqqzyABjpqabYXBEO2VjkOywPLf2FYZzvct/Y1xjWkLLfDrYy3rRN65PiNwqxnTSTKjfl505Thr3HW4PARBYCIJGvxIprgOGKoGlNLduK4yyNlqItwvBrasXjxHc9aY2sOq7KBUwWuorm2XRGEr73dSCprNhmnKpMbxSGVclGSpmWK+EUAV2tDpUF3Ao2pUTV+K+EUWBm8R2eXxFCQT1JI0/Kk/EuEag30Lk6SgjWdPjzrclajZKtTaJcUYDD3sThgSri7aBgox1jy/7NPezvG4Yvgbvc3N2w7zkfr4J0P7y/jVzGcFRszKIciJrN8U4ZqGvMLbiYdfgCZkn/WusZJu+GQ148HsvZjtjaxR7q4ps4gCTab70c0bZl/EcxWmr87YTieaLOM5H7O8DBBGxzCCreY/39K7LdsXRkw+NM5tLeI0Afor8lflOx9TW7F1FvtnyZcmGtxN/RRRWszhRRRQAUUUUAFFFFABWY7bdpzhUFuyufEXAcgOyDm7HoOnOr/anjyYOwbrDM58NtJg3GOw9Op5CvGuLcRvMxGbvMXf1ZtxaXyHJF2A5ms2fN2/DHk7Ysfdt8FLFYxkuNatOLmKunNdvP8AdnmxP4LUeC4eLbNbuWy7Pq106k6dZ6xAHKu+HYa2ENnK63AcxuayzSNSx3J122im+HswAN4EanX5rz5TrRsSsgwOCyiCzNrMkyeQ/ICnmEw8VBbFOOFWRdU5HQkaFcygiOoJri7ZekcoldgV1kpTxziItqU0klNzGjNB057fjSSsb0Ord1BplLkgMCCIg9fxr69yT4gFLMVUL5AHUTI51nsVhrobNaNy2GaM7gG0fQiDnOu86VWt8Wv5CbrW4VWl1JDLI0lYjXbQ1XaTZp4pfxBBntsDBWZI6EbfMH2qzhr6silSTAAMhlMwJ0YA1ncPwl8XLvcuBFGoQxLywaTvAgQKSXsbZq8DcsBB3t7M5JJygDdiQPEeQIHtV/DphmMd6yHoygfjMVgjwi7ZcW7YuXlcEqp1III+9yGo1NVrvClsqM+NupeOrKjC4FJM5Y8tt6tJflktv2bjjmIt2MoRw+dkQablmAIHmBJkba18K1jbXHrFhheWxnddBdvOzmTpoghB7CnI7XcRuP3dm1YXSSxXRRyocF/oFJjcrXJFUm4lxTc3MM/7ptQPmJr5hOOd4St213V1WCMAZWSJUj90xHxUOPopS9lwrVbEYZWEMAauVwwpIZj+K8LcAh3BtToI2k7k/wDfOqOCxy2vsbjd7hm0Dfs8v5fy9NtxdthgQRIPWs7xbh5WQqp3ZGpO6+ldVK9Mhqto2nYvtIbLLhMS+ZG0w94/hbc9f2WO+x1ifQa/P+BItH9VvEG22ikGQh0gTyExHQ6cxXqfYjj7XAcLiGm9bEqx075P2v8AMugb2PPTf0+Zv4Jf0Zc2P9yNbRRRWwzBRRRQAVzduBQWYgACSToABqSfKuqwv6TOLmEwVs63gWvHeLQ0I15u3h9A9TOSjFtlRj3OkYjtF2jOJvNi2BNtfBhbfUEwGj9tzr5LHnSnDYbwm4t4frBOZ9NogAD90TAnzNWbSO7G+lvPbsnIi8mOzsNeWqD+KpHRZzhAhYDMB16TXkTm223y/wAo3xilpHzOTBYyYEnrpE+tSW71QMaBXI6DC05MBRJqwOB3ldriPbnKCUziT8c9+dJb1vMNyI2IJU/IqPhd7Eq2RMhC6y7HbpPM8qaQmaYYooltVBH3QfcjIR0jL8HpVLtThw+VcgYsrjXltHwdfWKYYPiQEEoATvH0moO1Dq6LcW23gmVUyGmOuoAIHPaaS5B8Cu0uKvhrSGxdtA6pelCgEGOoJ2n1rvDG5imW3f7tlsk/ZW3JXTKEDeni08qlts/1M6LnXK5BjIPFOUcyZEHyJrot3QBwtuc0mANAsRmPJVBiqvwKjUJwtgvgUBf3Ygc+Wgpbd4Ey3Dcs4s4d2+oKSyt5lRpPvSG5xvuFAJMmdBrJ3NI8d2mxF2RYUmN25D360Rg/ANryb/E8K74RieIYlxzVQltT/KZqovZnAKYVLrjmDcifwLfjFZnB8KvlBde89+Rratt3RE7Q06+8VcudnrzAMrdx0zXGvN5TsB8kU2/mJL5GlwPAMEsHu7mk5QSrBQei7baTvUmHwmFw0zcvhCABmUMqRPMaj3NZnB8avWCLWLEHZbg+l/8A0t5HQ0/GMJ8SNB+JHMEf0qXfkpJeCxe4tgFEjENcPJbaZifiY+KR4fB3cVi1urZa1ZQ5gG+u4QIWRyUb6xT1OLtzuR6Ks/JFR3eN29jiGY9C4A+ABRa8IVPyWr+HZTBj2IP5VCagGONs5rcFTuIDD1g7e1FjE3LmZnFoa6C2SdOpBAjlpyqKLskYVBftBgQdjViuTQBk8dw+3bm2LLkt9LAkjXfN67VZ4RjLhiCVxFg5rbHc8oPXSVYcweUinGOssynK2VhqG6EGs1jbbplvm+ty6Ccw1DGDrI6GY36HlXWLs5tUe38B4qmKsJeTSdGU7ow0ZT5g/wBDzphXmfYjiwtYhYP2OKj+G5HhP8Q8J8wlemV62HJ/kjZhyQ7ZUFFFFdTmcu4AJJgAST0rwvjvFWvPcvzlfEvltz9xNk08rYLkdS1eo/pBx3d4RkB8V9hZHoQS/wD+NX94ryZsUi3jcuIXt24SByLQWOx2XKP4jWHq57Uf7NWCOnIv4bD21ytYvkoqKCnqCBM6zufWq19tTQFtKs2VyK/iI5yevnFQM1YHyakBNfUBJgCT0FRFq+WuJ3rJLWoBP3tZHxRQWML2GuWCr3LMiR4XBAadPI1L2h4Zacd5bTIw+4dfcc4kj5qXhnaEXg1prF2/OrLB+Q06GdZppYxeGsTFnxNyuXDcj0iBFPgV2ZjA38Q0otkEAfSASD8Dwjzp5Y4DdZCblxLalSCjMGZZEGCupHqJr7ieOjbPlB2VdB8Cqg4pOiq7ex/MwKV/IdHy52fttBv4h7kalEUIp6S8kn4FUsdi0towsIWIyrJMyxIAAPMCZgV3dxsvle4E0koksxHmRAA9CfWqx4stwotpXZVcTcKhEAVg0KMxPLfXWq2+RaFuH4c99y10FREADQkTrPQHTbWtdw7C2mtBLa5TEZMoB00MRuPOltvtEbJP/DDLzuHxEei66e001wfGme13ly4LR3y2rdtWj965lkzrMACiVvkS0cYThF6y3954f2NyvqeR8qZ3jKkbEa68qziced0N36LeurEbddOtfMbxFQql2zsSMqSVBHMkDUgDrptUOLbKTVDvEG1etlbiwTAZWGhnYg9DyrM3uy14N9ljHS3yWJI8pnWnNkreu97uE8Kxtm+8fMicvlrV3FqwTMAYkAnp1/Cmm48A0nyZs9jiT9rirzeUhas2Ox2ChhmCuomS7Fh5xTnC3w5eOTkexhl/BgPaqfGMLZOV7sLDTniYjXXUSNNpp98uLF2oh4WXH2Nz6gcs8m8x5EGu8McOl8KHy3QxEByQ5IMgqfXYbUvucYa7dQlGhDlNxgUWSRB11jSNtKccKus+d2XKC5yc5AEFh5EgkfPOk0CGs1yaq2eJByqLbjw52cnroojbXX4qzU0XZyaQ8Us2rbM7Yc3C6keEwZ5e1PzVXG2yyHKYbkehppiaEHBX/vMOSQdXtnmNdx5gw0+Y6V7P2c4n+sYe3dMBiIcDk6+Fh6ZgY8orxfH/AKwrW8VedXJbUqRMTBBEzABO/OvROwWLy3btnlcAvJ6iEf8A/mfmtnTT7Z17+5mzRuN+jb0UUV6RjPOf0k4ycRbSdLVoufVzv6hbZ/mNY3h/6zatI621KXQWuZgDlLnN03C+H2pj27vd5fxOv13BaHl9Nk/iGNU2wxWbiYgMjT9mD9J+mSPaK8jNK5yfz+xvxqopFXE3NSRpVN7lfcS+tU2euaR0bLKvJrtlNQYHGvacPbMMNiQDv5GtrZxtvGYZXuIveQJZABHUwAJ/6UPWxIxycSFpAqF2cyzKsRroJMaHbn10qjavMH757ZdzMKW0XkPgeutbAcPsW7DIyqLgeFdCTnJOmYH3EjpSLJTUkFFPBcVNpnZg5d40QaKBsATA96Y8JTE3Xa8ApzeDxscqcwIA1Mb+tRWrah0zAFSwmTEjpPKdpp1g70IzW8ttFuFghllnUDxjWTyJEem9DYjrFdlQbfiLDEEnPcGXXyiYCQBGvTfWpMZg0RQLf0L4RpH06f0qe1x+59nmwzHMCYt+NhBAPhG41Go6ip8Ti0dFLlkTIQiZJgglmJy7aSSddd6523yXozt5QRB6fNUHwzOAb2Jt4e0IXmWcARy1M68qa4m3BIiPmoOE4CxfMG5bS+gjLdIXmZKk6ayPiqixSIQvDJAbFX2QfSqWCFB9zr5TTjg+H4SwYq+IusRDEiGA/MD0q1/4VcDW5Yjr3in+tLMVwxLD94uMwquAR4mbQnoFHiHlPSrskd4njvDsGir3LmR4VzToOcKB150ru9rUxTBUS4RytpbMehJ8IHXX3qHhjW7YdktYjGXnOtzIbSf5QW+5MnSucSOIEz+r9zbO62LZdj5F9/6UuR8Gk4Vw1LVtnxN9Lbu2YopFwqICgSDEwJ3518x2OwEQbdy7lIYScokbGAKxuK4ViAUu4gOiGStuGLaEQWImT5DafKpThsQ0XltXO7GhQjKz/vAHkOh318pNAO+I9pcFkKthLj5/CFViS3oOvtUWE7RWLdtU/s/FhV0EakDzkfnVfgig3D9m4bJoWRljWSJI3Mj4FPO7PSpcktD7RXwziGHbWy7R9BW4uRk1JUMOgLFZ8x501rP9o8EqZrxGUNaZTp9ZOiAdTMj3p8hMCd41/rSfsa9HdckUTRNSUZfimEwym5muMtxoyrurTqY10210px2R4iVfCXCfpcWn8802j7ZirewqDjN9LZzPY72VIAEgzy1HKl3DGPd3gkjKxZfLQEfiK6xlVP0c2rtHvdFRYW8HRXGzKGHuJor2jzTxDiN3NfU7hr73DHpcu/nFVwcOVL2Ayk/WG6xJ+Ca6TNmtFRLBWInme7I/rXfEMQzpL2Rab9kdIAn3MmvEZ6QlvPUBNduajqkItcLwy3LgV3yLuWAzEDyHWn+EwAs/+64kNDHwXAEjU/S06g7wYrJ3GeIRsoP1EDX0H9ajC3CwL3oHXRPljNNxvyFm/sYIX7iO8IVbMwJkExEyJ6z61LiuyNwSbZVx5EH8qz3DOKAZQLylttx4o8hWmwePDc4bp/pXF2i0Zzi3DXtoS4iNZ6VZwOIuWlVltu4KgP3Q1AjQ5Sd9K0OPU3rVy2dc6kDnBjesrgcWBCSe8CZyVJUqdcwMHaZ8Jpp2ga2SYLEQ3dlbjOVPd95aa13cwdTpJ8K7aRVjA8NuXsULTd5da0pdiAVQ5suXQaEb6Hp5VzieKzFxi8jUgkQvtG8RvVjhbXUXvLjDMygQJkATv5yT+FO62Kh9d7MMf7xlt/5mE/Ak1Uudm8CP70NdPUwi/O5/Cl+L40EGra8h1rK4zjeIxTG3ajKDBbkPIftNQk3wDfs07YzhtrS3hbLkfum7HqTIr7b7aWVaLdi0p/dtW5+FE1k8Z2auJpfa4TuA0qPgU9wYt5QMPkRhqBAkabEbkVTr2L+hy/6Rso8bXFHXI4HyBV/h3bMXR4bpYdQ5pCOCWz9riCbrHfvPoX/Kg8IHsT50hxXDmw7LetrlVo7xFGnmQvJh5b6jnRp+WFV4R6FxHi5YAd7cQt9NwHMJ8waWWjxb7mKVh5KJ9Csz7ikmH4ymzMpU7gH3kVNb7XWFGV2Ugdf9RUpSQ3Q4HEeLjcEjn9m5I9huPMTVm3jeLGAUt25/xHUALvqQ5BnTbzpJ/wCOMKB9Z05Z2/pvU3CO1tq+xFq2oA3JBJM+bSYqrlV0yaXGiS/wG610XsXfOIcaqJXInmFUkT5mrhqO1i8lzwGFCg7AwSWnT2HzULcUD3AhIZoJzKjKOuumWY8+YrnbZapFma+TXGavk0FEONe6CjWFVnB0VgCG8oINK+HZ1vXVuqFfKpbSNRIOlXeJqWCqHyEsIY8jyP5Uv4daZL5U3RdhT4wZzeLXX1mqXBD5N3wXjnd4ezbDQEtIuvkoH9K+V5pise6uwEwGI36GityzujK8SsvZCWtKGykh1zfsnum1/CpeL276oP1hw7HXMDOkCBueUfNScUw4GIKNst90PoQ9v+oqri8LbS0O7vd6DDEySROwM+Q/CsT9GkRvXNdvXFWIK6toCQCYBOpiY9udd4S9bRw1xcyj7uvi/l1j4rX8M7T2zNoWUNtjpZyL4dBodJ3kzPPek3QCDiHZ97KC9adHtH7wBHypgj1E1VwfEAJFx8zNt0X0Cj8NTW4NjD2zL4W4FM+Br6so9lkgeU1RTtRh7TEYazbtnqFBP8xk/BpWFEfCFxZ1TD3GQ/SSpHvqNBXziXZvF5zctYfIzfUSMmumuY+lMB2qutr3jfzTS3iHaEk63NfM/wBN6lV4RWyDCdnDaOa9c7xwc2jaA+m2mkb9ah4xxQr4Ry1gka8gPz9ga6scaV/AsljpoDp5kxAqfC9nVxDu+UlUyrmk5Z8Ug8jEj5o83IPGjJWsO+IYl2ZV3bQrmnkJ5RJkda12A4Ar2wq3EtzoqEMOU7gQOtdca4b3RhXDQBMA6TMbjUaGkJN5CMt0nMYOaD8e1U33CqjWpwcgZcRegLEeJWJ/yhZHXUxuOldsMLbEW7A13diST/QfFJ8XiksplRLAc/Q0HM0/tM3imd5pXicTmgXbjEzlhDEmdYG8DzNTVjNScYhWDABqvcx9sWijgNJCoeZlssf98qzGJw+HUgzccSCZOy8yTtGkACmmEt27jq1tZS2vgMHcxtPMCdfP1pdqQWLMV2WsZi0sBMkAkD8KtL2Ww2wQGNJM8tD+INOcVw92T6TBIBPvrUmaWygbCfx/rv6zT75ew7UJv7AsJ4hbXT90GuntWgO/sBpt/wB4pIkoYkhRsVgGOgNN7txVguYWYJ3ilnEuNYKCEtWWuN4VeGBg7TJ366U02wdIYvi5A6wRVfAYtzcKNayqZKsDIMc/3SekazS3E94GRbdxS7E/UJGikkAAiASKa8KuMylnXKSxhegAC/mDSqkFjAmuaJr5UlFLidy0Covki2fqK7gUt4QlrvD3M93l8M6GCR+NXeIYko2buReABlDz/EVV4O4LXHywDl06bkiq/aT5FeK4fcZ2YBoLEj3M19r1bgnZ3PhrD6DPaRo6SoNFeisGjI8uzLducP3eKvHlmW8POMrn8QaU4wYcC5btIyuCWfSAddCD5jWtn+k3BxctXo0ZTbb2Mj5zN8Vk8PeusiotoOpXIzn6lKSPxAU+9Y80e3I0aMbuCZmHriprywSOlRVIz5U1m9btjO85jomWc3qI3HkdKhr5lEzzNMCLEY+7fJ8Tqg3+6W8hO3rVlMRbARVBWIzXH8IgdJ1LHzirfCcclp81y0lxdiHEgCd960HFsPYv2s9qytpl1OSYbyyk7xt50OSQkjIYzG5vBZ5nV48Kjyn6jX17wJXu3kAyxiQegB6dYpxxYWzbthWQsqxKpkLKNJblOo689TSeKExl28tm8AFYrBBKbZidSI2IABPSK1vC+IWLYZLZAQmQoiF2J25SN6zHBon6cxVsxBA8SwVInyzAxz1pjxLAW1YOlrMrqVBRAMuaRBIiQDrrUS9DXs0OPxFs23cJnbLCjNAMkEmesAxWTx+Gb6Q0dGHQjcHzB0NXVwQtK62ye8KsEAZzlBBgkFiABtOmlReI201ZkUBbZYQSgUASPWY8vWpWuCuRQnBrGaWMaSWYloA5686t4HiGFtgdxgXxBGneX7hVf4UWNPevtxUDDvQTaOjlRmK6gzHMaQR504CcPOo4ggHRkYH4rpbZDSK1rtk6ABuG4ZUn7iAx7GZp7xDtHetrbezZs3FfZVRUI0zTJGogbRSm9hbFxGXCd9iX8rTKnu9ccL4JxcPnCqhEhS0RbB3ChoAMaTJPyaNsNImxWM4liSDiEt4e1yzNH/lHib2j1qxhcXhrCsUR8Q51e45FtdBtA1CgbAE+5JqZuEYgsWvvhp6NeJ9yQDJ8hFV8RwVLIb/2hhStyc4dm3Ig5Y2EcuVLbHo4PaTFsAyYPDIpGgcZjHnA0NUn4kt4Mt/CpbuCJdAACNp9t6fXMVgFUM+Pt+eUFtfITWb4jxvDO5W1axDIYDXBbjMoM6KYopvwGj5wrAlbpzKPAPC0DWdyTuTAiTTsVEmPsXSe5ZtB4ldcrL6ipRUO/JSOooivoqQDSkMW4pb4zvYuBRotzYkg6wBPlVDAoe5aPquMQPUnIPaamx5sMC9t2N5QcyagAmVHPUmm/ZnBB8ThbO4Q5z6Wxmk/x5B710jHuaiQ3SbPWMNZCIqDZVCj0AiipaK9o80RdteHd/hLgH1J9ovqu/vlLD3ryjC5iGCXWtmM8jyGVx7rl+DXuhFeO8e4ecLinUDwzmQftKfu/BKz1BrB1kOJo1dPLmIi49hAr5ldXDbldpiY9dRSZhWmv2LIVrVu2wn7RGH0lSAf5prO3lg1kizQyKiiiqEMOEYNHJNwnIPuqVDN1AzabeRp/aw1u1DYbFwo/wAO6uw6BwdR+NY42xMxqNj0qRLpmbrPcUbIoUdd9p5c/mk1YG4wS4NixuopLiGNox57GucZ2cwbf3N24D0YKf61n8FirDKTcUWFGzZgrfAkfnVzCrce2bti+zWgYzMiPr5qhFyPOKimh6IcJwxrd9reYHw7zAbN9MmJGxqW3wqyoKJ+sW2kIQMQrSREmT4OvSKp426bd4G8oNxgFVkEiCRrO4Gg35k18x95QO9Fwf8A09ZLHnMeZHvVbFot4dDK2FvutxXOaWDsAAfqUSp1yj3rZYHGWEtojWFYooGYsZMCJMaVkeFuzfaERO2msabn1Br7xbiQSB94zGvT/cVO70VqjW3OOYVQT3Ngeqz+ZpQ3aayXHc4VCeTG3bQexYFvgV53icS925ALKQdSJ8HpOhY9fervC7NhWi6kz99vER/E0mrcfbJs3OP7U37IzXYW30S6NP4YB+JqynFVuic0zyJn86TYLgeFQZlthmP3n+0Ov+aYHkIrM4zCYm05SzdUICcvh2B1AHUa6eVRSlqyra8G4xGAw90y1iw5iIdcp/mWI9YNcjg2CUScDhwenePc/wDLlA/EVhP7Qxi/4iHXmv8ApTjh13EtcGe5bdI17sHQ6aEkyDqPnyqqcVyK0/A5xrBFItW7AEjLlthSh6zqdZI32Jrq6EOqn1HMeVUsTjQh1hQCJJ5kmB7cqiwSiS6uzK0gBiWjxHWTryH9KgZdt2wCSAJOh8/+5qdTUINdBqRRYU0Yi6yrmVcxGsdaiU1xiTcCi5ZvqAwOYAycoPi05etMTKV3EC9cVhaFrUuyAzEaLOu5OvtWz/Rngs1zEYojQRh7Zjp4rpB6Fyq+tusQ1xozKs3LrAKu0sxyovyR+Ney9nuFDC4a1YUzkWCf2mOrN7sSfetnSQuXd6M+eVRoY0UUV6JjCsx274T3tkXVHjtanzXn8b+mbrWnoIqZwU4uLKjLtdo8XsXLkZbRAdSWTNqOedT8lh79KVcbwDiLpiHEyI35+ms1qu1fBjhb2dNLbGVI+6ent+IjfWkzph1Uu+cLcOoWXyvyAB2UyY9a8aUXCVM9BNSVoyZFfKu47DZGI5ToapkVSYj5RRRTAc8Cu4NYdwl5wfGrEEKsbgAgkg9Tz2p9Y4Xg7hz28QiWiRnWXZ9DmyjYZZ+JNYW7YVh4hoATpuNDqI6b+1F7tBcaLdlUA27woFHqT/U0drfArS5PRxwvhgETeb+Jf9KW3eFcOEkXb5YarLIQp5Egat7msRg7Zuvk765cPPuoIHTU77GmVjg6rc7tMSS8ZiMmaOQkh4DeUUNV5/4CY4v4gKIGsDpG3lSHilq45BYgKVEiNRqT4SDodutXP1BGzr+tszp9agKT6CNvzpaL7XHzNCKdEB5DTU/ApRVbG9lrg9qyrBLmfJ+5qZ6md/ammO4Gpb/hn7wCMwYBcszE6kQY/wClWeHNw8JIK3Sph2dtIIOuVSMusczV0Y0KkZBZs7gkC2G8wu59TUtsaRHg7XdqE3gQTM11j+6Fs5xroFbYyTsRz38qqriEdsquQSCQFiSBEx8iluJ4zZYd1bBzhjOkRlOpJ57RPU0kmx2GD4+uHk922bXxhM2WNgJ6xqR1q1jOPIbYvXRLHVYXu7fXLlAEt1maWqs71B/ZKuwNwlwPpU7KJJ2G+pO9XryTslwq3bml9VI1aBqDOgHnAnXrFOMLahQFGgECoWuKhXvJVTzj49AetXb3FMVbHgNoJuLfdowI6ZyMxbzn2qW7K4OlNdiof1pXhl0n/ep7BGYKSBmMAnQfNSMLuKW1D3EZrf3su8eWhqibNonvLasouAFg24XcKfXeKuXHuoShdXsycoABzNt9XQQfxqrYsvduJh7Ot240AxIWPqdh+wo+dBuaqKbdITdbZpP0d8LN/EtiHH2dg5U6NcI1P8CmPVvKvT6o8E4VbwthLFoQqCPNjuzH94kknzNXq9fFjUI9qPPnPulYUUUV0ICiiigCnxbhyX7Rtvz2P7J5H/vcSK8qv4W5hbxtuPKORHLX5IPr5ivYaUdo+BribcaBx9JP5HyP4b1m6jB/kVrk7YcvY6fB5dirT3AEdrYtFotvEESZhzGkbVmsfhTbcqSDGxGoI8jWlxuHayXs30lToQdJjbXk3RhofTavibChSi2M9ph4bswbUDVSJ325V5i1pm0y9TYW2pJLkhFGZo3jaB5kkCrWP4W9rJmghwCpUht9pjY1WsMn03CQpOrATl1BBgbgR+NWSXXfC3lIS1csOBIzutwPAkgwAVaOkilUDaBG0VYxndo2W3dW+SPqth8qAiDJdR4oJ0ArnD4hUbM65gfCRExIgt7DX4pgVnsgiNQP3SV/KvlqxkEWyU65YBPvvTJbVpC4ui5t4CmU+khoBHoRRw7h5vFgr21gT9owSfQnT5NFioW27WX+7JQ9RufXr71IBoAddI9aucR4dcssBcA1EghlYEeRUkVVFFgR90uYMVBIMidPPWPMCu+JcSbEA2iS6z9eUoBHISST600tdnMUy5hh7pWN8jf6VRw2G8WUkWwPqZpAQDcmBOnpNOwKfdOTm7wq0RK6Qo5Lrp61atWwNhrETz+aY3cHYYE4fEC6R9SsjWj6gNuK4w11TaKC2O8mS5JMiCdBoBrA570m2NI+27LBM8HLMTGk9J609t9n7rqDZuWnJAIyXEJH8Lb/AI0iwVxnBtszNA8EmcvUDoJj5NQWMHbZmW7kECVZoBHkDvqTsOZqdeRjvG4O8ARiUYXBocwPiGwI5R6efSqeAxRtg2mtd6pH2ctlFv1O5XyHpttVtYQggi5cgfdLsV/lJimNrDuwJVSQu/lSY0SYDDsxCIJJmB57nSpdHmxctERJNydOUD13qAIl5PB3ltkgMx5nWcunT867xGKCqMxhVhZ312A/ec7AD/rSAjuMEQKoOVYVVGp10CqBu5PIV6T2C7MHDIb14D9ZugZv/lINVtg+W7Hm08gKodhuybKVxeKSLm9my0HuARBZut4j+Uada3del0+Ds+KXJjzZe7S4CiiitRwCiiigAooooAKKKKAFXaDgaYq2VbRo0b/Ucx+XKvMcXw+9hLmVgY5g6yv/ADL57jyOlex1V4hgLd5ctxZ5g7FT1BGoNZs3TrJtcnbHlcdPg8dw+AQLnsWu9hpay7EyIjwknYdKXYjhgOc5ltsIPdmZJIkhfLetjx3snestntDMupLry5+NBt/mTT91aVPeRmX9ZtAOB4bg1kHmG2I9K86cJwdSRrjKMloxr2SNwRNcvcJABCgLsQCD7mYO3StViuH3Ch+07+0hGVFEMqiSepJg8qVvw9Lj+D7FCpYC9oRHKY3O9CY6FNy+WCrlAC8+vQfwiR7+VWsFhrpGa3Z7zUCCjOIEsZCwYkAb7kV9HDLhV2CEqhhiORqqLBUhxmU8mUlTp5inYjvGoQ0mwtnMJyKHAI1EgOSddfy5VCK7uMzElmZmOpLEsT6k61zloAvPLILj4pVYAABrj5zlESqiSdQdepqG3dF5jm8LXCInec0gep006iKgzEgAhYGxAMnUnUkxzPKvjWQRBEjpvTAu4rAXsPFy7aZBqFzAjMSDoJ39qqpfKtmUag7bSOnl/tXwYfbQ6aCZMek7Crg4a4ZVcZM0QWkb8/SlYEmLxiHK2Ftvaf7zXCj+oVRpG+p+K7t2S3jYSeZgDXroIFSWrNu1cK3AzgiFNvWW5ctqb4fDXUYo9xRZMtlOpJ2HoKlsaKhw+QI8C4pglUMmD6c9KtHCqCt4lrYME25+A3p0Fc4a4lvOuGtlmOrNJgAcyToAPYDWuuE8Ov4x/wDhwt2DBvtPcW+uU73XHRfCDuaIQlN1EJSUVbK+KxMlQFbxnKiIJe4eiJ001bYczW57IdjO7ZcTiwpvD+7tA5ksec/eu9X5cutOOzXZa1hJeTdvsIe+8ZiP2VA0RByVfeTrT6vSw9MobfJjyZnLS4CiiitJxCiiigAooooAKKKKACiiigAooooAKUcX7PWr4P3CSCxAUho5FWBGo5iDtrpTeiplFSVMabW0eY4/sresSwDgAElrIa4p127uTcBjXTMBrr1XXnLjK9pMQtsjMynOVI11A8Q5fUK9fpdxLgWHvkNdsqzDZx4XHo6ww9jWWfRxf6TvHqH5PLBawr3MwuPbkeJD9JO2sa866Tgd24jW1v27iKPslESNzrOtbbGdiwR4L5YR9OIRb4/n8N35c0nxHYu6J+wtt52r72z/ACXFYD+as0ulyI7LNBmbv8GxVxRcfCKMhAyp98CJmNJNQ3eHOrC8cA5UzNkTI6az6c6d3OGXbIIY4uyPWw49fDdBPxSy/wAdRPCeKXV8mt3P+UmubxzXKLUovhla1wa6rEfqbOLkAb/ZdTPzVjCcCxYmz+qju2JbvCPENNADvvBrgdqrR0PEr7n922//ADMKu2LLX4ytir0nkLK/i94U1jm+EHcl5Iv7FvBTbxN60ttBCDMM28knz9Kqi3hghW5ee+Z00gDSI5aelO7XYzENEYVR1OIxG38FhTP8wptgewd3/ExKWvLDWVQ//dum4/xFXHpsjIeaCMm2JK2xktrZtqIzuRbEf5mj4FfeH8NvYnWzauYif8Rs1iwPW44zv/AvvXo/D+xuDtN3nc95dme8vM15geoNwnL/AAxT+tEOjityZyl1D8GJ4V+j5NDjLnfQZFhB3dhfVJm4fO4T6CtpbthQFUAACAAIAHQAcq6orXGKiqRncm+QoooqhBRRRQAUUUUAFFFFAH//2Q=="
        title="Paella dish"
      />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label='Add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='Share'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label='Show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph variant='body2'>
              Description: {item.description} <br/>
              Goal: £{item.goal} <br/> 
              Money by: {item.date} <br/>

              {/* <PotDetails item={Item} /> */}
        
              <Dashboard item={item}/>


             


            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Item)
