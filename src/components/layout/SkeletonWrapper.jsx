import SkeletonLoader from './SkeletonLoader'

export default function SkeletonWrapper(props){
    return [...Array(props.amount).keys()].map(index => <SkeletonLoader key={index}/>)
}