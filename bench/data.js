window.BENCHMARK_DATA = {
  "lastUpdate": 1675688364874,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b532c63bd6ce1d8f7acc3e7b0f764513505a8e75",
          "message": "docs: render `__dunder__` method API documentation",
          "timestamp": "2023-02-06T07:51:58-05:00",
          "tree_id": "3991fca020789a9071465e766e36505fa1cbf38b",
          "url": "https://github.com/ibis-project/ibis/commit/b532c63bd6ce1d8f7acc3e7b0f764513505a8e75"
        },
        "date": 1675688283975,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 175.29887069200637,
            "unit": "iter/sec",
            "range": "stddev: 0.00005863708292173605",
            "extra": "mean: 5.704543309676894 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7485761758499023,
            "unit": "iter/sec",
            "range": "stddev: 0.000984177080224519",
            "extra": "mean: 1.3358693907999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.5581029750386,
            "unit": "iter/sec",
            "range": "stddev: 0.00005778978310983734",
            "extra": "mean: 13.782058226412282 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5933.82473099872,
            "unit": "iter/sec",
            "range": "stddev: 0.00005153873749766469",
            "extra": "mean: 168.52536860010866 usec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.73576040814325,
            "unit": "iter/sec",
            "range": "stddev: 0.00015387583355087168",
            "extra": "mean: 15.21242005555505 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4487.880529245144,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405598224767288",
            "extra": "mean: 222.82233082710846 usec\nrounds: 665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10488.698113636943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033541917493504777",
            "extra": "mean: 95.34071713817791 usec\nrounds: 4709"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.43021898944967,
            "unit": "iter/sec",
            "range": "stddev: 0.00563701955010443",
            "extra": "mean: 11.181902619717086 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 161.51931829769498,
            "unit": "iter/sec",
            "range": "stddev: 0.0006074842667757568",
            "extra": "mean: 6.191209884609022 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.23671364281438,
            "unit": "iter/sec",
            "range": "stddev: 0.0003316314373560262",
            "extra": "mean: 4.459573027782128 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.68154390235644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005790507460458648",
            "extra": "mean: 10.45133637287987 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.470581767032066,
            "unit": "iter/sec",
            "range": "stddev: 0.00011890240204950425",
            "extra": "mean: 17.400206666668005 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 610.235504526481,
            "unit": "iter/sec",
            "range": "stddev: 0.00006347988480924751",
            "extra": "mean: 1.6387116000009883 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.855529324059022,
            "unit": "iter/sec",
            "range": "stddev: 0.00019292987407573206",
            "extra": "mean: 72.17335235714017 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11277195.176729424,
            "unit": "iter/sec",
            "range": "stddev: 3.06761633893994e-9",
            "extra": "mean: 88.67453159490583 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8717519714319212,
            "unit": "iter/sec",
            "range": "stddev: 0.0036664466916993942",
            "extra": "mean: 1.1471152721999829 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 255.54235735725027,
            "unit": "iter/sec",
            "range": "stddev: 0.0001901952540813542",
            "extra": "mean: 3.913245578313234 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.15881754386933,
            "unit": "iter/sec",
            "range": "stddev: 0.00049578296466156",
            "extra": "mean: 11.091538545449774 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9160.909544478767,
            "unit": "iter/sec",
            "range": "stddev: 0.000019221479727855555",
            "extra": "mean: 109.15946666045784 usec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.46107480206229,
            "unit": "iter/sec",
            "range": "stddev: 0.00019799885589101015",
            "extra": "mean: 4.008641431507747 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 324.9320860191425,
            "unit": "iter/sec",
            "range": "stddev: 0.000033045043936477916",
            "extra": "mean: 3.077566183910467 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 115288.92154646784,
            "unit": "iter/sec",
            "range": "stddev: 3.821750997451005e-7",
            "extra": "mean: 8.673860303194392 usec\nrounds: 35212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.67337313788664,
            "unit": "iter/sec",
            "range": "stddev: 0.0006027826910904816",
            "extra": "mean: 6.912121963499882 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5947964517209741,
            "unit": "iter/sec",
            "range": "stddev: 0.009634235966466639",
            "extra": "mean: 1.6812474201999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4542936.474819584,
            "unit": "iter/sec",
            "range": "stddev: 1.1044321637044456e-8",
            "extra": "mean: 220.12194217213815 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.47547953181359,
            "unit": "iter/sec",
            "range": "stddev: 0.000602863030831039",
            "extra": "mean: 10.931891312493391 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.0017280320126165,
            "unit": "iter/sec",
            "range": "stddev: 0.0017491532702718644",
            "extra": "mean: 199.93090259999917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 560254.7144913754,
            "unit": "iter/sec",
            "range": "stddev: 4.504692540211845e-7",
            "extra": "mean: 1.7849024276535457 usec\nrounds: 22076"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.08214793680913,
            "unit": "iter/sec",
            "range": "stddev: 0.020492033704997147",
            "extra": "mean: 32.1728087142828 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.4971435786194,
            "unit": "iter/sec",
            "range": "stddev: 0.00017311527337320396",
            "extra": "mean: 11.17354096470736 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 996.5550160856179,
            "unit": "iter/sec",
            "range": "stddev: 0.000012007306066515347",
            "extra": "mean: 1.0034568928546603 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 252.28578973539405,
            "unit": "iter/sec",
            "range": "stddev: 0.00019303200173390197",
            "extra": "mean: 3.963758723980586 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.035780214814977,
            "unit": "iter/sec",
            "range": "stddev: 0.0004523420205624165",
            "extra": "mean: 38.40868188889443 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.23588345237836,
            "unit": "iter/sec",
            "range": "stddev: 0.00008152042920878889",
            "extra": "mean: 10.077000024692513 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1455.8434955766795,
            "unit": "iter/sec",
            "range": "stddev: 0.000005046490234145719",
            "extra": "mean: 686.8870198193154 usec\nrounds: 1110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.96790554711366,
            "unit": "iter/sec",
            "range": "stddev: 0.00004837671693722144",
            "extra": "mean: 10.420150302322357 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5299.858113357421,
            "unit": "iter/sec",
            "range": "stddev: 0.000044940667134187926",
            "extra": "mean: 188.68429656251826 usec\nrounds: 1949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 146.83436929973317,
            "unit": "iter/sec",
            "range": "stddev: 0.00010720675309858153",
            "extra": "mean: 6.810394628785437 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19256.9920522631,
            "unit": "iter/sec",
            "range": "stddev: 0.000013013851275690932",
            "extra": "mean: 51.929190046193064 usec\nrounds: 9303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.4286518957813,
            "unit": "iter/sec",
            "range": "stddev: 0.000635684755414483",
            "extra": "mean: 11.058441976471093 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 160.27154404980791,
            "unit": "iter/sec",
            "range": "stddev: 0.0006278415583729762",
            "extra": "mean: 6.23941078204892 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 274.2038015906365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000830743595584519",
            "extra": "mean: 3.646922450378412 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.81471001123313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003727502211675204",
            "extra": "mean: 6.953391623999323 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15403207343563605,
            "unit": "iter/sec",
            "range": "stddev: 0.04974681703493678",
            "extra": "mean: 6.492154378599992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1564103.8416994563,
            "unit": "iter/sec",
            "range": "stddev: 1.0427539492722768e-7",
            "extra": "mean: 639.3437400636157 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 521.1039984805892,
            "unit": "iter/sec",
            "range": "stddev: 0.00008004184919241458",
            "extra": "mean: 1.9190027382552304 msec\nrounds: 447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.032180889668,
            "unit": "iter/sec",
            "range": "stddev: 0.000011962300270056994",
            "extra": "mean: 3.7589437362644924 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.50595817792725,
            "unit": "iter/sec",
            "range": "stddev: 0.00022624711526146756",
            "extra": "mean: 22.468901714286662 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 164.50445937862565,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768408466322411",
            "extra": "mean: 6.078862565654751 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 163.90110146353112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006170685975627507",
            "extra": "mean: 6.101240266664745 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5384326.772896331,
            "unit": "iter/sec",
            "range": "stddev: 4.718990253499235e-9",
            "extra": "mean: 185.7242404071096 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1467815.6869575798,
            "unit": "iter/sec",
            "range": "stddev: 9.13872514435817e-8",
            "extra": "mean: 681.2844479627777 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57781.96663363287,
            "unit": "iter/sec",
            "range": "stddev: 4.432419938319293e-7",
            "extra": "mean: 17.306437600861006 usec\nrounds: 13606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 419.6121598856934,
            "unit": "iter/sec",
            "range": "stddev: 0.000027869389812851825",
            "extra": "mean: 2.3831530532204073 msec\nrounds: 357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5204.595078508339,
            "unit": "iter/sec",
            "range": "stddev: 0.000049838027109849284",
            "extra": "mean: 192.13790600720557 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.56728205636787,
            "unit": "iter/sec",
            "range": "stddev: 0.00020131479961804617",
            "extra": "mean: 3.9750797155567046 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8638917822419558,
            "unit": "iter/sec",
            "range": "stddev: 0.0047420871554020175",
            "extra": "mean: 1.1575523932000125 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 257.02446941740715,
            "unit": "iter/sec",
            "range": "stddev: 0.00019289280615820148",
            "extra": "mean: 3.890680145227738 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6087.845069061442,
            "unit": "iter/sec",
            "range": "stddev: 0.00004639391230865006",
            "extra": "mean: 164.26173607505575 usec\nrounds: 3501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5267.723915149926,
            "unit": "iter/sec",
            "range": "stddev: 0.00004816775874716781",
            "extra": "mean: 189.8353095392887 usec\nrounds: 3166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 279.01703463283957,
            "unit": "iter/sec",
            "range": "stddev: 0.00008268660506926475",
            "extra": "mean: 3.5840105652183816 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 389650.81101631693,
            "unit": "iter/sec",
            "range": "stddev: 1.510321790690045e-7",
            "extra": "mean: 2.566400407050928 usec\nrounds: 1968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10809.652501841343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014844834529236194",
            "extra": "mean: 92.50991184311037 usec\nrounds: 5978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1445067.0004122886,
            "unit": "iter/sec",
            "range": "stddev: 1.516182766552268e-7",
            "extra": "mean: 692.0094360432371 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.72125961587315,
            "unit": "iter/sec",
            "range": "stddev: 0.00024944092389581117",
            "extra": "mean: 4.136996479288299 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.176978038570475,
            "unit": "iter/sec",
            "range": "stddev: 0.022431335773979787",
            "extra": "mean: 30.141382944445166 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.194052341429419,
            "unit": "iter/sec",
            "range": "stddev: 0.0003238839933130898",
            "extra": "mean: 108.76596769999765 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 124.84992297969804,
            "unit": "iter/sec",
            "range": "stddev: 0.000028047058927608308",
            "extra": "mean: 8.00961647499463 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.82771328786163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925946093468797",
            "extra": "mean: 11.9292291388891 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 148.730784660087,
            "unit": "iter/sec",
            "range": "stddev: 0.00019175609981390038",
            "extra": "mean: 6.723557616437138 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.38280219414608,
            "unit": "iter/sec",
            "range": "stddev: 0.00009396893206050162",
            "extra": "mean: 14.623559841272565 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2479690075461494,
            "unit": "iter/sec",
            "range": "stddev: 0.0012256063351003706",
            "extra": "mean: 444.8459906000153 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.39750401354505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006095873369704067",
            "extra": "mean: 6.23451098039252 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.29554148501562,
            "unit": "iter/sec",
            "range": "stddev: 0.00020532476888298148",
            "extra": "mean: 9.588137572915064 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 127.40047088615215,
            "unit": "iter/sec",
            "range": "stddev: 0.013100924280955325",
            "extra": "mean: 7.849264551726985 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.48890086964599,
            "unit": "iter/sec",
            "range": "stddev: 0.0006340354162291857",
            "extra": "mean: 10.696456913043894 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5844334092255752,
            "unit": "iter/sec",
            "range": "stddev: 0.0015810915914603527",
            "extra": "mean: 631.1404406000065 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4302084.062305571,
            "unit": "iter/sec",
            "range": "stddev: 1.1403236102967934e-8",
            "extra": "mean: 232.44548119430115 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1465721.792666924,
            "unit": "iter/sec",
            "range": "stddev: 9.585473523754597e-8",
            "extra": "mean: 682.2577142559029 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.59876718051123,
            "unit": "iter/sec",
            "range": "stddev: 0.00022795239331096088",
            "extra": "mean: 21.930417461536038 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6107.266095890673,
            "unit": "iter/sec",
            "range": "stddev: 0.00005178235238307193",
            "extra": "mean: 163.73938588869717 usec\nrounds: 2537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5895.756150014846,
            "unit": "iter/sec",
            "range": "stddev: 0.00004598498041596859",
            "extra": "mean: 169.61352785892984 usec\nrounds: 2387"
          }
        ]
      }
    ]
  }
}