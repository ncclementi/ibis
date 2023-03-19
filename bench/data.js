window.BENCHMARK_DATA = {
  "lastUpdate": 1679217223753,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b3466dddfdd8918a0510fb08bcfe63c1bf025f90",
          "message": "chore(deps): update juliangruber/approve-pull-request-action action to v2.0.4",
          "timestamp": "2023-03-19T05:08:10-04:00",
          "tree_id": "03931e00d20f2c50e327eafae33c21795cdf8e9a",
          "url": "https://github.com/ibis-project/ibis/commit/b3466dddfdd8918a0510fb08bcfe63c1bf025f90"
        },
        "date": 1679217145902,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12055.411080736772,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230623048693657",
            "extra": "mean: 82.9503028393524 usec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.89816103484765,
            "unit": "iter/sec",
            "range": "stddev: 0.008231727597829837",
            "extra": "mean: 10.214696470590923 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12723.507531749592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020828650874219004",
            "extra": "mean: 78.59467976928931 usec\nrounds: 6411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.90355785357431,
            "unit": "iter/sec",
            "range": "stddev: 0.0006223557256786069",
            "extra": "mean: 9.18243645762744 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.56443601755755,
            "unit": "iter/sec",
            "range": "stddev: 0.000649839101569855",
            "extra": "mean: 8.728712284209607 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.10409597968209,
            "unit": "iter/sec",
            "range": "stddev: 0.00014767442158333553",
            "extra": "mean: 6.093693116129235 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4466.311897471211,
            "unit": "iter/sec",
            "range": "stddev: 0.001774614601244517",
            "extra": "mean: 223.89838035408854 usec\nrounds: 2148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.0654098946786,
            "unit": "iter/sec",
            "range": "stddev: 0.000006922226238138032",
            "extra": "mean: 567.1939307457332 usec\nrounds: 1314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1957784.025772519,
            "unit": "iter/sec",
            "range": "stddev: 8.5051116313249e-8",
            "extra": "mean: 510.7815708146926 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 524834.6192737418,
            "unit": "iter/sec",
            "range": "stddev: 2.1623221374927182e-7",
            "extra": "mean: 1.9053621146100932 usec\nrounds: 2270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.011480017473374,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420136110547723",
            "extra": "mean: 26.30784172414 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.9640292509796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006736310319422117",
            "extra": "mean: 8.335832051021528 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 796707.8755738771,
            "unit": "iter/sec",
            "range": "stddev: 1.4605602759791011e-7",
            "extra": "mean: 1.2551652000172453 usec\nrounds: 25000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.5417258793129,
            "unit": "iter/sec",
            "range": "stddev: 0.00006112158371638634",
            "extra": "mean: 1.4802934618114947 msec\nrounds: 563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 159.81795906772732,
            "unit": "iter/sec",
            "range": "stddev: 0.0035447162610647734",
            "extra": "mean: 6.257119073684468 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5558227.130522647,
            "unit": "iter/sec",
            "range": "stddev: 2.0312216316261945e-8",
            "extra": "mean: 179.91348257570968 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.5669316003484,
            "unit": "iter/sec",
            "range": "stddev: 0.00004260407696802592",
            "extra": "mean: 3.4297442254895447 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.01386989990628,
            "unit": "iter/sec",
            "range": "stddev: 0.0006232256285876969",
            "extra": "mean: 9.614102436168476 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.32488244177436,
            "unit": "iter/sec",
            "range": "stddev: 0.00036269586723111066",
            "extra": "mean: 15.546083600000056 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13981.040898422765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018394181308610592",
            "extra": "mean: 71.52543271029359 usec\nrounds: 6524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.428624486974204,
            "unit": "iter/sec",
            "range": "stddev: 0.004235644601706553",
            "extra": "mean: 95.88992309091603 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.12118661408547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005593493065208597",
            "extra": "mean: 8.840077000001019 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.34741637895782,
            "unit": "iter/sec",
            "range": "stddev: 0.01703049504362065",
            "extra": "mean: 10.168035285713492 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.76628005362244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005593980166175296",
            "extra": "mean: 27.95929569697364 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.28577109577874,
            "unit": "iter/sec",
            "range": "stddev: 0.00013929471586797767",
            "extra": "mean: 9.873055111111029 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6160282.5444494905,
            "unit": "iter/sec",
            "range": "stddev: 8.494670736567298e-9",
            "extra": "mean: 162.3302166391144 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.46130194512648,
            "unit": "iter/sec",
            "range": "stddev: 0.00028483193732786505",
            "extra": "mean: 10.475449000002376 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.07041257468119,
            "unit": "iter/sec",
            "range": "stddev: 0.0009179937985525471",
            "extra": "mean: 16.11073551020514 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 323.46048431901846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001865895588649725",
            "extra": "mean: 3.0915677446823238 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.82310021827772,
            "unit": "iter/sec",
            "range": "stddev: 0.00019642797907446153",
            "extra": "mean: 6.37661160000107 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6746537677673399,
            "unit": "iter/sec",
            "range": "stddev: 0.05819477208265988",
            "extra": "mean: 1.482241777600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 288.37928956536985,
            "unit": "iter/sec",
            "range": "stddev: 0.0002492345284699292",
            "extra": "mean: 3.4676553975396347 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5471.796162404278,
            "unit": "iter/sec",
            "range": "stddev: 0.000045383093290034534",
            "extra": "mean: 182.75534583521568 usec\nrounds: 2293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.2018111347696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000473912564483106",
            "extra": "mean: 7.342046274337097 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.64386305028297,
            "unit": "iter/sec",
            "range": "stddev: 0.0004106825175692761",
            "extra": "mean: 11.15525330985659 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.23469592904553,
            "unit": "iter/sec",
            "range": "stddev: 0.0006916622176411919",
            "extra": "mean: 8.317066818966575 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.41076648304036,
            "unit": "iter/sec",
            "range": "stddev: 0.0007689242912393874",
            "extra": "mean: 9.310053663548665 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.61427513257087,
            "unit": "iter/sec",
            "range": "stddev: 0.00007385350896386321",
            "extra": "mean: 13.225016020410804 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75397.28689874093,
            "unit": "iter/sec",
            "range": "stddev: 4.3477134149783924e-7",
            "extra": "mean: 13.263076711805384 usec\nrounds: 14926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.51830417643725,
            "unit": "iter/sec",
            "range": "stddev: 0.00023922883931251998",
            "extra": "mean: 3.3055851040893436 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2697401.2069353643,
            "unit": "iter/sec",
            "range": "stddev: 1.806463218891285e-8",
            "extra": "mean: 370.72720121464187 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5105.344490040712,
            "unit": "iter/sec",
            "range": "stddev: 0.00007269143216091523",
            "extra": "mean: 195.87316819673137 usec\nrounds: 2396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5256.427535652483,
            "unit": "iter/sec",
            "range": "stddev: 0.000024066852200224318",
            "extra": "mean: 190.24327705791714 usec\nrounds: 2393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 226.76701382785728,
            "unit": "iter/sec",
            "range": "stddev: 0.0038923038396301225",
            "extra": "mean: 4.409812446351289 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.869503696753573,
            "unit": "iter/sec",
            "range": "stddev: 0.002974267578482169",
            "extra": "mean: 1.1500813667999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.433727516456206,
            "unit": "iter/sec",
            "range": "stddev: 0.003632372644899335",
            "extra": "mean: 410.89234239998973 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 312.44825422037457,
            "unit": "iter/sec",
            "range": "stddev: 0.0002189043447182462",
            "extra": "mean: 3.200529964538335 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.3132392743842,
            "unit": "iter/sec",
            "range": "stddev: 0.000731827652579515",
            "extra": "mean: 8.381299561403273 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.11127870839897,
            "unit": "iter/sec",
            "range": "stddev: 0.01917384749792406",
            "extra": "mean: 11.612880623760425 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 320.34343393189465,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217726337658183",
            "extra": "mean: 3.1216497486026236 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11484358.612632036,
            "unit": "iter/sec",
            "range": "stddev: 3.949775973572239e-9",
            "extra": "mean: 87.07495418164316 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7114368975006464,
            "unit": "iter/sec",
            "range": "stddev: 0.0020115914671188966",
            "extra": "mean: 584.304335999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1991716.9450809848,
            "unit": "iter/sec",
            "range": "stddev: 9.611316915753391e-8",
            "extra": "mean: 502.07937552057086 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7246.0287622171945,
            "unit": "iter/sec",
            "range": "stddev: 0.00010848342581944315",
            "extra": "mean: 138.00662857071137 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.56877704672985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006475181846529321",
            "extra": "mean: 8.363387371681323 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.33731230662806,
            "unit": "iter/sec",
            "range": "stddev: 0.000208747662055544",
            "extra": "mean: 3.1812958909075526 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5577.108940993321,
            "unit": "iter/sec",
            "range": "stddev: 0.00005312019780555828",
            "extra": "mean: 179.30436908802668 usec\nrounds: 3552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1157.8034987354993,
            "unit": "iter/sec",
            "range": "stddev: 0.000014324424603642218",
            "extra": "mean: 863.7044205619994 usec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 307.15575679337604,
            "unit": "iter/sec",
            "range": "stddev: 0.00020119279018382337",
            "extra": "mean: 3.255677218749642 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.76667961406145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002133803746265862",
            "extra": "mean: 3.1469630523078576 msec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.58833025016129,
            "unit": "iter/sec",
            "range": "stddev: 0.0007217608451143458",
            "extra": "mean: 8.432532930436803 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5600.979270070433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000609672890241523",
            "extra": "mean: 178.5402073068956 usec\nrounds: 3613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.22058063717856,
            "unit": "iter/sec",
            "range": "stddev: 0.0008024682657060906",
            "extra": "mean: 9.879413788234066 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.568772341899447,
            "unit": "iter/sec",
            "range": "stddev: 0.0011936614101256307",
            "extra": "mean: 40.70207440909066 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7007358.302380737,
            "unit": "iter/sec",
            "range": "stddev: 5.56625554755611e-9",
            "extra": "mean: 142.7071311110529 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5637.957789547856,
            "unit": "iter/sec",
            "range": "stddev: 0.000056528786797186395",
            "extra": "mean: 177.3691888672683 usec\nrounds: 2102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 338.36526883530996,
            "unit": "iter/sec",
            "range": "stddev: 0.000012779685311152596",
            "extra": "mean: 2.9553860638300993 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.35191687737904,
            "unit": "iter/sec",
            "range": "stddev: 0.00005571627041321601",
            "extra": "mean: 3.4800533466659545 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.100183408031484,
            "unit": "iter/sec",
            "range": "stddev: 0.0005581388553876815",
            "extra": "mean: 18.83232666666738 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.57493266746748,
            "unit": "iter/sec",
            "range": "stddev: 0.00006891885371518244",
            "extra": "mean: 8.962586632073993 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146037.97210129406,
            "unit": "iter/sec",
            "range": "stddev: 4.09846634533881e-7",
            "extra": "mean: 6.847534142054407 usec\nrounds: 38911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1831847.214580569,
            "unit": "iter/sec",
            "range": "stddev: 1.3925106387168587e-7",
            "extra": "mean: 545.8970551913447 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.6136683768254,
            "unit": "iter/sec",
            "range": "stddev: 0.00009085257528596267",
            "extra": "mean: 1.3594092157185693 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.31898857895854,
            "unit": "iter/sec",
            "range": "stddev: 0.0007276283335611867",
            "extra": "mean: 9.585982510203355 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.63366067408866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002537118135781045",
            "extra": "mean: 177.50447849998827 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8679053848702334,
            "unit": "iter/sec",
            "range": "stddev: 0.0042224283380135974",
            "extra": "mean: 1.152199326600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8186838342754345,
            "unit": "iter/sec",
            "range": "stddev: 0.004152006620959732",
            "extra": "mean: 1.2214727567999888 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.31249552103492,
            "unit": "iter/sec",
            "range": "stddev: 0.0002450417350364726",
            "extra": "mean: 21.13606540909271 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.84441467678542,
            "unit": "iter/sec",
            "range": "stddev: 0.00006526574017182312",
            "extra": "mean: 10.433576159573658 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.4509930875967,
            "unit": "iter/sec",
            "range": "stddev: 0.00002647258326365996",
            "extra": "mean: 5.116372059321401 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.7678251119423,
            "unit": "iter/sec",
            "range": "stddev: 0.000021544875897063252",
            "extra": "mean: 1.8492224454977395 msec\nrounds: 422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1661240361965884,
            "unit": "iter/sec",
            "range": "stddev: 0.08489519565555737",
            "extra": "mean: 6.0195985054000065 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.2292688735409,
            "unit": "iter/sec",
            "range": "stddev: 0.000997372017660693",
            "extra": "mean: 25.491170972968945 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5281.314397193374,
            "unit": "iter/sec",
            "range": "stddev: 0.00005144440116111506",
            "extra": "mean: 189.34680361605166 usec\nrounds: 1991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5193.579534469088,
            "unit": "iter/sec",
            "range": "stddev: 0.00005158498180263261",
            "extra": "mean: 192.54542909435287 usec\nrounds: 3279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.9909091449657,
            "unit": "iter/sec",
            "range": "stddev: 0.000055420151382738343",
            "extra": "mean: 6.173185923076089 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.802329903618709,
            "unit": "iter/sec",
            "range": "stddev: 0.00011025513199711247",
            "extra": "mean: 63.2818075625039 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.98673392560322,
            "unit": "iter/sec",
            "range": "stddev: 0.000049080983606982916",
            "extra": "mean: 8.265369000000586 msec\nrounds: 112"
          }
        ]
      }
    ]
  }
}