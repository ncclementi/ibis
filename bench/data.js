window.BENCHMARK_DATA = {
  "lastUpdate": 1682086627963,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "46a55fcf2060326f8a0bd279a4a6c49edb89dda2",
          "message": "refactor(ops.Hash): remove `how` from backend-specific hash operation\n\nBREAKING CHANGE: The `hash` method on table columns on longer accepts\nthe `how` argument.  The hashing functions available are highly\nbackend-dependent and the intention of the hash operation is to provide\na fast, consistent (on the same backend, only) integer value.\nIf you have been passing in a value for `how`, you can remove it and you\nwill get the same results as before, as there were no backends with\nmultiple hash functions working.",
          "timestamp": "2023-04-21T10:12:00-04:00",
          "tree_id": "938f8b366d6f78806bfa8b6a6f8c68a08eb53add",
          "url": "https://github.com/ibis-project/ibis/commit/46a55fcf2060326f8a0bd279a4a6c49edb89dda2"
        },
        "date": 1682086540628,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 91.7019608202635,
            "unit": "iter/sec",
            "range": "stddev: 0.005869081870550469",
            "extra": "mean: 10.90489222973113 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.0920838778462,
            "unit": "iter/sec",
            "range": "stddev: 0.00021506823008691071",
            "extra": "mean: 18.15142811111059 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 40.54903209234887,
            "unit": "iter/sec",
            "range": "stddev: 0.011397190105887326",
            "extra": "mean: 24.661501111112553 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1891476.4398647374,
            "unit": "iter/sec",
            "range": "stddev: 9.664607969718006e-8",
            "extra": "mean: 528.6875262752475 nsec\nrounds: 133352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 701427.1032655409,
            "unit": "iter/sec",
            "range": "stddev: 0.000006595921591629382",
            "extra": "mean: 1.4256648985253537 usec\nrounds: 23754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.535213198224731,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757052383297644",
            "extra": "mean: 86.69107218182148 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.67025066659463,
            "unit": "iter/sec",
            "range": "stddev: 0.00003527388805614012",
            "extra": "mean: 7.370812651164539 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.9929556021788,
            "unit": "iter/sec",
            "range": "stddev: 0.00002485911188343531",
            "extra": "mean: 1.4513936490482715 msec\nrounds: 473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.88919550514848,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620237418996003",
            "extra": "mean: 10.011092740740494 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.68413980767409,
            "unit": "iter/sec",
            "range": "stddev: 0.0007548726187241548",
            "extra": "mean: 9.834375369565059 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.500284412684,
            "unit": "iter/sec",
            "range": "stddev: 0.01015941963548635",
            "extra": "mean: 11.049689031251772 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.21760868225478,
            "unit": "iter/sec",
            "range": "stddev: 0.00006922388088626568",
            "extra": "mean: 8.458976722222486 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2466.386830558738,
            "unit": "iter/sec",
            "range": "stddev: 0.00007599481286269743",
            "extra": "mean: 405.4514026793839 usec\nrounds: 1418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.66980957305364,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954638442400873",
            "extra": "mean: 10.344491257576104 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5825472249828105,
            "unit": "iter/sec",
            "range": "stddev: 0.0019092575772098703",
            "extra": "mean: 387.2146036000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11826.488859301237,
            "unit": "iter/sec",
            "range": "stddev: 0.000013222085995873784",
            "extra": "mean: 84.55594994397049 usec\nrounds: 4455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.12635437500593,
            "unit": "iter/sec",
            "range": "stddev: 0.0001493971159596819",
            "extra": "mean: 20.355672891305996 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.17210857968912,
            "unit": "iter/sec",
            "range": "stddev: 0.0006239665976506818",
            "extra": "mean: 10.398025111109948 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.42081452571336,
            "unit": "iter/sec",
            "range": "stddev: 0.01757775427046072",
            "extra": "mean: 25.367309428569047 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.20637588953826,
            "unit": "iter/sec",
            "range": "stddev: 0.00028280966352993485",
            "extra": "mean: 3.568798164657808 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.7099382876107,
            "unit": "iter/sec",
            "range": "stddev: 0.00002433320478318044",
            "extra": "mean: 1.8597387342041636 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140431.5290158796,
            "unit": "iter/sec",
            "range": "stddev: 2.927552607249923e-7",
            "extra": "mean: 7.120908011241 usec\nrounds: 34015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2441.371353396666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007610764022540097",
            "extra": "mean: 409.6058547622039 usec\nrounds: 1260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.73262046200264,
            "unit": "iter/sec",
            "range": "stddev: 0.00003741551117815936",
            "extra": "mean: 9.369206861701715 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.44515080435052,
            "unit": "iter/sec",
            "range": "stddev: 0.0005924352674671412",
            "extra": "mean: 10.262183307692663 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2525698.463577182,
            "unit": "iter/sec",
            "range": "stddev: 1.5312176829055925e-8",
            "extra": "mean: 395.93008208257896 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 91.41887321300042,
            "unit": "iter/sec",
            "range": "stddev: 0.011212283827039475",
            "extra": "mean: 10.93866031000033 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.5617813202763,
            "unit": "iter/sec",
            "range": "stddev: 0.00028052836933256534",
            "extra": "mean: 3.6960135135134053 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.75413287949897,
            "unit": "iter/sec",
            "range": "stddev: 0.00040636043821707345",
            "extra": "mean: 4.020033711296842 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6729086255609038,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637684145817058",
            "extra": "mean: 597.7612792000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.03010542989823,
            "unit": "iter/sec",
            "range": "stddev: 0.000777102283110911",
            "extra": "mean: 10.41340104255116 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.6530283673554,
            "unit": "iter/sec",
            "range": "stddev: 0.00026332797757617566",
            "extra": "mean: 3.601617478765355 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.1249215084138,
            "unit": "iter/sec",
            "range": "stddev: 0.00000436835584362882",
            "extra": "mean: 567.1747859728882 usec\nrounds: 1383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 117.20691731321153,
            "unit": "iter/sec",
            "range": "stddev: 0.0001399678362362927",
            "extra": "mean: 8.531919641975604 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.4690971645375,
            "unit": "iter/sec",
            "range": "stddev: 0.00783469351219725",
            "extra": "mean: 4.246841781115912 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2328.443755519206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000900725555406393",
            "extra": "mean: 429.47140021297866 usec\nrounds: 1874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.284096336251064,
            "unit": "iter/sec",
            "range": "stddev: 0.0004258657266406264",
            "extra": "mean: 36.651387961541104 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 504109.4566532314,
            "unit": "iter/sec",
            "range": "stddev: 1.9056263891573062e-7",
            "extra": "mean: 1.9836961731267095 usec\nrounds: 2169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9323568924687833,
            "unit": "iter/sec",
            "range": "stddev: 0.0038934637701184805",
            "extra": "mean: 1.0725506596000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12375111.191302415,
            "unit": "iter/sec",
            "range": "stddev: 3.248418158792488e-9",
            "extra": "mean: 80.80735474128988 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2391.291511747931,
            "unit": "iter/sec",
            "range": "stddev: 0.00009051029938972467",
            "extra": "mean: 418.18406291629543 usec\nrounds: 1351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2352.0654390949517,
            "unit": "iter/sec",
            "range": "stddev: 0.00008143189074310425",
            "extra": "mean: 425.1582389581766 usec\nrounds: 883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.8935840090973635,
            "unit": "iter/sec",
            "range": "stddev: 0.00021945017084959892",
            "extra": "mean: 169.67604066666317 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.6899096163381,
            "unit": "iter/sec",
            "range": "stddev: 0.00023143927079913093",
            "extra": "mean: 3.5753881910568035 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.04520344499906,
            "unit": "iter/sec",
            "range": "stddev: 0.00007535098653311765",
            "extra": "mean: 13.15007330769082 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.58997507323858,
            "unit": "iter/sec",
            "range": "stddev: 0.00024264393887645132",
            "extra": "mean: 21.01282882500044 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9866.837539287213,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017042142567000774",
            "extra": "mean: 101.3495961617141 usec\nrounds: 5054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.19241583510467,
            "unit": "iter/sec",
            "range": "stddev: 0.00027274691072692127",
            "extra": "mean: 3.7010661343295754 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.12528986495425,
            "unit": "iter/sec",
            "range": "stddev: 0.00010327076920798627",
            "extra": "mean: 5.07291581250217 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.05704265923882,
            "unit": "iter/sec",
            "range": "stddev: 0.000038018273281184765",
            "extra": "mean: 6.326829751939229 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 106.28810562112265,
            "unit": "iter/sec",
            "range": "stddev: 0.00007229061698817762",
            "extra": "mean: 9.408390469998835 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1198.8315842119123,
            "unit": "iter/sec",
            "range": "stddev: 0.000018748037808868555",
            "extra": "mean: 834.1455239998368 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2379.9690097739267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000786832104502657",
            "extra": "mean: 420.17353834997624 usec\nrounds: 1382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18149089622936496,
            "unit": "iter/sec",
            "range": "stddev: 0.0764839697004587",
            "extra": "mean: 5.5099182425999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.3126771037532,
            "unit": "iter/sec",
            "range": "stddev: 0.000021522129003298785",
            "extra": "mean: 1.320458550653574 msec\nrounds: 612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1639312.1688002106,
            "unit": "iter/sec",
            "range": "stddev: 8.978697643976376e-8",
            "extra": "mean: 610.0119422232349 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7282856343482494,
            "unit": "iter/sec",
            "range": "stddev: 0.0009051997457800425",
            "extra": "mean: 1.3730876360000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 260.9042888314876,
            "unit": "iter/sec",
            "range": "stddev: 0.004010066650415463",
            "extra": "mean: 3.832823157023219 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 307.4234851375072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000487873665282711",
            "extra": "mean: 3.252841921145714 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.85333297573396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002348433951177327",
            "extra": "mean: 3.625114800001228 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6481348.868197398,
            "unit": "iter/sec",
            "range": "stddev: 9.197839394578576e-9",
            "extra": "mean: 154.2888710877434 nsec\nrounds: 196117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.29890901753828,
            "unit": "iter/sec",
            "range": "stddev: 0.00003726139629298629",
            "extra": "mean: 9.970198178577794 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.311796622615926,
            "unit": "iter/sec",
            "range": "stddev: 0.0001628511693030257",
            "extra": "mean: 61.30532541176509 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13527.291785325433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019473106005139032",
            "extra": "mean: 73.92462703324045 usec\nrounds: 6762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2382.0049582764814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007956424570880015",
            "extra": "mean: 419.8144074072616 usec\nrounds: 1431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 181.4859134586043,
            "unit": "iter/sec",
            "range": "stddev: 0.003776039509282623",
            "extra": "mean: 5.510069519682546 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.56873786212621,
            "unit": "iter/sec",
            "range": "stddev: 0.0007728482324855416",
            "extra": "mean: 9.845549142861687 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5881954.906433388,
            "unit": "iter/sec",
            "range": "stddev: 9.270632668046702e-9",
            "extra": "mean: 170.0115039828691 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.77593252550807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776871978797977",
            "extra": "mean: 6.1059032580641865 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.37083343061663,
            "unit": "iter/sec",
            "range": "stddev: 0.0006596475102113181",
            "extra": "mean: 11.315950763156929 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.94162830232462,
            "unit": "iter/sec",
            "range": "stddev: 0.00014576600985936132",
            "extra": "mean: 14.505024389832716 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8208.706284122194,
            "unit": "iter/sec",
            "range": "stddev: 0.000012047498479905995",
            "extra": "mean: 121.82187611393334 usec\nrounds: 3931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.85039812998725,
            "unit": "iter/sec",
            "range": "stddev: 0.0006249566334908924",
            "extra": "mean: 10.43292484444199 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4737.554629792124,
            "unit": "iter/sec",
            "range": "stddev: 0.000021912627191835112",
            "extra": "mean: 211.07936016431296 usec\nrounds: 2199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.22263796814637,
            "unit": "iter/sec",
            "range": "stddev: 0.00008301292615349128",
            "extra": "mean: 9.072546424528449 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.83355076110235,
            "unit": "iter/sec",
            "range": "stddev: 0.00012748652720587773",
            "extra": "mean: 16.713031188683818 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 385.39396908412607,
            "unit": "iter/sec",
            "range": "stddev: 0.000029858038723179612",
            "extra": "mean: 2.594747401928633 msec\nrounds: 311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2317.2572364123916,
            "unit": "iter/sec",
            "range": "stddev: 0.00008165435452635685",
            "extra": "mean: 431.54466594663154 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.83088078582745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006867223974317321",
            "extra": "mean: 6.296004876711799 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.95217750147496,
            "unit": "iter/sec",
            "range": "stddev: 0.015133558018359704",
            "extra": "mean: 11.36981514736494 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.6098759480752,
            "unit": "iter/sec",
            "range": "stddev: 0.0007655449833861119",
            "extra": "mean: 10.459170562495975 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68568.34337349833,
            "unit": "iter/sec",
            "range": "stddev: 0.000002613822171412508",
            "extra": "mean: 14.583989503040847 usec\nrounds: 13909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.62139880417467,
            "unit": "iter/sec",
            "range": "stddev: 0.0007214874068872252",
            "extra": "mean: 10.243655717390068 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9273630238246439,
            "unit": "iter/sec",
            "range": "stddev: 0.0012051622820145858",
            "extra": "mean: 1.0783263665999812 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8029326865862498,
            "unit": "iter/sec",
            "range": "stddev: 0.0012418658116852672",
            "extra": "mean: 1.2454344140000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.72624828433987,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231547748323219",
            "extra": "mean: 9.830304536591699 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2579704.5815439587,
            "unit": "iter/sec",
            "range": "stddev: 1.6226360647498373e-8",
            "extra": "mean: 387.64128542239763 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7170121.898341998,
            "unit": "iter/sec",
            "range": "stddev: 6.445345294409267e-9",
            "extra": "mean: 139.46764283483847 nsec\nrounds: 71429"
          }
        ]
      }
    ]
  }
}