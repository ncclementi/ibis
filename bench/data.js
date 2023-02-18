window.BENCHMARK_DATA = {
  "lastUpdate": 1676688761492,
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
          "id": "183af2c905cfd2f67cf3677d98b8a10c76306fb0",
          "message": "chore(deps): update trinodb/trino docker tag to v407",
          "timestamp": "2023-02-17T21:47:46-05:00",
          "tree_id": "b75cc01d5cc52f25fd847fec9efe6ba2d7143be2",
          "url": "https://github.com/ibis-project/ibis/commit/183af2c905cfd2f67cf3677d98b8a10c76306fb0"
        },
        "date": 1676688679720,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 74.15697036945826,
            "unit": "iter/sec",
            "range": "stddev: 0.01104404992785558",
            "extra": "mean: 13.484909038461105 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.7198372748536,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242408170850622",
            "extra": "mean: 11.022947461538134 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.98221764745495,
            "unit": "iter/sec",
            "range": "stddev: 0.0006026170280566196",
            "extra": "mean: 12.050774591834132 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.46770931327865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002255461432627673",
            "extra": "mean: 4.1585625066075345 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4437.806766111708,
            "unit": "iter/sec",
            "range": "stddev: 0.000022311713036891867",
            "extra": "mean: 225.3365350731966 usec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.00151620574851,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378468295360451",
            "extra": "mean: 16.128637833332284 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.99171552979323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006530157332325007",
            "extra": "mean: 6.173155193335068 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 237.74097328849635,
            "unit": "iter/sec",
            "range": "stddev: 0.007009262130107271",
            "extra": "mean: 4.2062585433538615 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.3088739956211,
            "unit": "iter/sec",
            "range": "stddev: 0.0006847529421973148",
            "extra": "mean: 6.929580782609002 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.46459313930623,
            "unit": "iter/sec",
            "range": "stddev: 0.000228400522994831",
            "extra": "mean: 4.057377927038721 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55054.373207267,
            "unit": "iter/sec",
            "range": "stddev: 6.381810436767406e-7",
            "extra": "mean: 18.163861320066815 usec\nrounds: 12756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 165.9051419553798,
            "unit": "iter/sec",
            "range": "stddev: 0.00014414677333852188",
            "extra": "mean: 6.027540727272637 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 162.4315909941553,
            "unit": "iter/sec",
            "range": "stddev: 0.0006382039674166519",
            "extra": "mean: 6.156437881815629 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.8072728264808,
            "unit": "iter/sec",
            "range": "stddev: 0.0001641324006809214",
            "extra": "mean: 7.00244448484818 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.2253382565685,
            "unit": "iter/sec",
            "range": "stddev: 0.000020379527515679673",
            "extra": "mean: 1.9446727448133998 msec\nrounds: 482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1923961.3028142054,
            "unit": "iter/sec",
            "range": "stddev: 4.725119833406516e-8",
            "extra": "mean: 519.760973641903 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.02784856586882,
            "unit": "iter/sec",
            "range": "stddev: 0.00034039470693739604",
            "extra": "mean: 4.463730765623897 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6096.903930169406,
            "unit": "iter/sec",
            "range": "stddev: 0.00004733507759291859",
            "extra": "mean: 164.0176737986118 usec\nrounds: 3412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.03883975154018,
            "unit": "iter/sec",
            "range": "stddev: 0.00022755968852107737",
            "extra": "mean: 13.881400692306682 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5851.239601662869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000468392165855913",
            "extra": "mean: 170.9039567813646 usec\nrounds: 2175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.60216771606446,
            "unit": "iter/sec",
            "range": "stddev: 0.0009201515841098175",
            "extra": "mean: 73.51769371428774 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.53252870077924,
            "unit": "iter/sec",
            "range": "stddev: 0.0006809061718299783",
            "extra": "mean: 6.307853714283716 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 565720.6133473064,
            "unit": "iter/sec",
            "range": "stddev: 2.8322490111233606e-7",
            "extra": "mean: 1.767656996062262 usec\nrounds: 19647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 251.07451220644015,
            "unit": "iter/sec",
            "range": "stddev: 0.00011537638806729595",
            "extra": "mean: 3.9828813813557202 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.6419030211268,
            "unit": "iter/sec",
            "range": "stddev: 0.0001259257722168434",
            "extra": "mean: 9.74260969999913 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.470945946556547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005537365871646242",
            "extra": "mean: 39.26041860000851 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 213.63537745941434,
            "unit": "iter/sec",
            "range": "stddev: 0.00759587546501049",
            "extra": "mean: 4.680872671428103 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4697145.689212145,
            "unit": "iter/sec",
            "range": "stddev: 9.473035626970917e-9",
            "extra": "mean: 212.8952487670767 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.8743001108177,
            "unit": "iter/sec",
            "range": "stddev: 0.0005705225355643666",
            "extra": "mean: 23.323995899998096 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.9099019934075,
            "unit": "iter/sec",
            "range": "stddev: 0.00006221658845281371",
            "extra": "mean: 3.7465826203206927 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.32208220709063,
            "unit": "iter/sec",
            "range": "stddev: 0.00008239275858625147",
            "extra": "mean: 7.026316538461795 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1942290390398247,
            "unit": "iter/sec",
            "range": "stddev: 0.0026564744721077178",
            "extra": "mean: 455.74093779999885 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.5248421103854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006801881940148645",
            "extra": "mean: 28.964650925925323 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4438984.5149317365,
            "unit": "iter/sec",
            "range": "stddev: 1.2227405296371666e-8",
            "extra": "mean: 225.2767489138161 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.18530952590208,
            "unit": "iter/sec",
            "range": "stddev: 0.0006992563345331537",
            "extra": "mean: 6.2819867171052195 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.92321091912062,
            "unit": "iter/sec",
            "range": "stddev: 0.00020443852786246038",
            "extra": "mean: 8.201883730435572 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.776024966001898,
            "unit": "iter/sec",
            "range": "stddev: 0.002167227554009455",
            "extra": "mean: 209.37913999999864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 324.20965456585964,
            "unit": "iter/sec",
            "range": "stddev: 0.000032701081244935866",
            "extra": "mean: 3.084423877935014 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 159.2730448105051,
            "unit": "iter/sec",
            "range": "stddev: 0.0007005015511767786",
            "extra": "mean: 6.278526295455384 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5712761557989584,
            "unit": "iter/sec",
            "range": "stddev: 0.061586294368602926",
            "extra": "mean: 1.7504668973999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11845217.4677038,
            "unit": "iter/sec",
            "range": "stddev: 3.3386895598382017e-9",
            "extra": "mean: 84.42225756730127 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1490692.7823097105,
            "unit": "iter/sec",
            "range": "stddev: 1.0640774226910321e-7",
            "extra": "mean: 670.8290345718177 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 146.60903139388455,
            "unit": "iter/sec",
            "range": "stddev: 0.0008077276216915694",
            "extra": "mean: 6.8208621971818895 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.30408210326758,
            "unit": "iter/sec",
            "range": "stddev: 0.0001494742432779777",
            "extra": "mean: 10.95241282716112 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 412.09433436639,
            "unit": "iter/sec",
            "range": "stddev: 0.00002802029638470095",
            "extra": "mean: 2.426628848313424 msec\nrounds: 356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.52650065411319,
            "unit": "iter/sec",
            "range": "stddev: 0.0007927934306683059",
            "extra": "mean: 11.046489069767922 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.04687224743765,
            "unit": "iter/sec",
            "range": "stddev: 0.00025581637671170455",
            "extra": "mean: 11.48806354761858 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.00886068453716,
            "unit": "iter/sec",
            "range": "stddev: 0.00036358801362401796",
            "extra": "mean: 19.99645635416769 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.68856036674143,
            "unit": "iter/sec",
            "range": "stddev: 0.0007105675123677753",
            "extra": "mean: 10.906485999999779 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.372226274365886,
            "unit": "iter/sec",
            "range": "stddev: 0.025746442937003337",
            "extra": "mean: 30.890677444444254 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5185.803409611435,
            "unit": "iter/sec",
            "range": "stddev: 0.000048174069069145975",
            "extra": "mean: 192.83415143477808 usec\nrounds: 1882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7341424844181073,
            "unit": "iter/sec",
            "range": "stddev: 0.0022693909144572205",
            "extra": "mean: 1.3621334022000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1415960.340428796,
            "unit": "iter/sec",
            "range": "stddev: 1.0575135913058398e-7",
            "extra": "mean: 706.2344696018602 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.096595997886043,
            "unit": "iter/sec",
            "range": "stddev: 0.0004553397532595309",
            "extra": "mean: 109.93123144442052 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8416698823183545,
            "unit": "iter/sec",
            "range": "stddev: 0.0067633000212878385",
            "extra": "mean: 1.1881142726000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11093.177698738942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017044145316418829",
            "extra": "mean: 90.14549547093964 usec\nrounds: 5409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 251.54292988148606,
            "unit": "iter/sec",
            "range": "stddev: 0.00021558361763771122",
            "extra": "mean: 3.975464547825486 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6115.655036242148,
            "unit": "iter/sec",
            "range": "stddev: 0.00004652353268073938",
            "extra": "mean: 163.51478199373136 usec\nrounds: 3743"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 382379.3035963078,
            "unit": "iter/sec",
            "range": "stddev: 6.194405777155416e-7",
            "extra": "mean: 2.615204302625483 usec\nrounds: 651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14983089746144854,
            "unit": "iter/sec",
            "range": "stddev: 0.07844697469094312",
            "extra": "mean: 6.674190817399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.55920561906157,
            "unit": "iter/sec",
            "range": "stddev: 0.0002037841877553309",
            "extra": "mean: 4.039437747828199 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5290.881012783672,
            "unit": "iter/sec",
            "range": "stddev: 0.00004895210228016374",
            "extra": "mean: 189.00443944663076 usec\nrounds: 3468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.670590645897434,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890939658316425",
            "extra": "mean: 22.38609307691884 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 994.1341892692111,
            "unit": "iter/sec",
            "range": "stddev: 0.000011000713397373236",
            "extra": "mean: 1.0059004214864604 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.3140123501576,
            "unit": "iter/sec",
            "range": "stddev: 0.00044709003046912546",
            "extra": "mean: 14.855747935484024 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6120.394392486403,
            "unit": "iter/sec",
            "range": "stddev: 0.000045719786572199695",
            "extra": "mean: 163.38816355162223 usec\nrounds: 2140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.34121552161047,
            "unit": "iter/sec",
            "range": "stddev: 0.000596356787560107",
            "extra": "mean: 11.19304225000289 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9758.342397664093,
            "unit": "iter/sec",
            "range": "stddev: 0.000011635439014202209",
            "extra": "mean: 102.4764206100593 usec\nrounds: 4396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 254.80539218934945,
            "unit": "iter/sec",
            "range": "stddev: 0.00019773980463482402",
            "extra": "mean: 3.9245637284507935 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5618791959712606,
            "unit": "iter/sec",
            "range": "stddev: 0.0024506553656058736",
            "extra": "mean: 640.2543824000077 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5645078.45066185,
            "unit": "iter/sec",
            "range": "stddev: 4.8983904045479836e-9",
            "extra": "mean: 177.14545665585985 nsec\nrounds: 55556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18779.74961530195,
            "unit": "iter/sec",
            "range": "stddev: 0.000016587440131810713",
            "extra": "mean: 53.24884625645855 usec\nrounds: 5275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8482325911037566,
            "unit": "iter/sec",
            "range": "stddev: 0.005099237043585983",
            "extra": "mean: 1.1789219259999868 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10178.284220994161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016946443710674075",
            "extra": "mean: 98.24838629848414 usec\nrounds: 4890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121032.21275002301,
            "unit": "iter/sec",
            "range": "stddev: 4.218141342507136e-7",
            "extra": "mean: 8.26226322132419 usec\nrounds: 33223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5276.738976129841,
            "unit": "iter/sec",
            "range": "stddev: 0.00004991720149700903",
            "extra": "mean: 189.5109848191577 usec\nrounds: 2042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.90925768440513,
            "unit": "iter/sec",
            "range": "stddev: 0.000804218525669857",
            "extra": "mean: 10.999979820223999 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 141.63436111039064,
            "unit": "iter/sec",
            "range": "stddev: 0.00024012874070896139",
            "extra": "mean: 7.0604335851848425 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.31887081579791,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300703824859435",
            "extra": "mean: 11.07188332811937 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.8638555193427,
            "unit": "iter/sec",
            "range": "stddev: 0.000023374266644051572",
            "extra": "mean: 1.613257477582987 msec\nrounds: 513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1431675.4870361695,
            "unit": "iter/sec",
            "range": "stddev: 1.204487440828655e-7",
            "extra": "mean: 698.482309053278 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1466.0848786380855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052534101095562835",
            "extra": "mean: 682.0887484556464 usec\nrounds: 1133"
          }
        ]
      }
    ]
  }
}