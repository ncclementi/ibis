window.BENCHMARK_DATA = {
  "lastUpdate": 1683808146984,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "bd8eb884679947542c83254ddf41d6e1c6ae0c28",
          "message": "fix(operations): ensure that self refs have a distinct name from the table they are referencing",
          "timestamp": "2023-05-11T14:23:07+02:00",
          "tree_id": "e650274747ed869b434d3910f605617257d5760e",
          "url": "https://github.com/ibis-project/ibis/commit/bd8eb884679947542c83254ddf41d6e1c6ae0c28"
        },
        "date": 1683808065884,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3063898.209739234,
            "unit": "iter/sec",
            "range": "stddev: 8.655687103644854e-8",
            "extra": "mean: 326.3816000222505 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6048766.919076492,
            "unit": "iter/sec",
            "range": "stddev: 1.081421743602086e-8",
            "extra": "mean: 165.32295150008264 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.7472259659794,
            "unit": "iter/sec",
            "range": "stddev: 0.006016988507059293",
            "extra": "mean: 4.06922192537155 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.39131559170186,
            "unit": "iter/sec",
            "range": "stddev: 0.014584582353659257",
            "extra": "mean: 25.38630621950233 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.6429534662962,
            "unit": "iter/sec",
            "range": "stddev: 0.000058535324309275345",
            "extra": "mean: 8.877608134619882 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7070361.693266296,
            "unit": "iter/sec",
            "range": "stddev: 4.919622275935238e-9",
            "extra": "mean: 141.43548001966985 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.34427947839947,
            "unit": "iter/sec",
            "range": "stddev: 0.012173268896141632",
            "extra": "mean: 11.319352038458856 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.03194864374262,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854280619448101",
            "extra": "mean: 9.897859176468874 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1909.9691738587182,
            "unit": "iter/sec",
            "range": "stddev: 0.0029058006768843425",
            "extra": "mean: 523.5686594772083 usec\nrounds: 1298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9484770805167794,
            "unit": "iter/sec",
            "range": "stddev: 0.0020264931784909936",
            "extra": "mean: 1.0543217337999864 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.9436803813367,
            "unit": "iter/sec",
            "range": "stddev: 0.000013475796375622586",
            "extra": "mean: 847.4980769224662 usec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2122.83182044854,
            "unit": "iter/sec",
            "range": "stddev: 0.00009567819851315985",
            "extra": "mean: 471.06887619044016 usec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.97098616239757,
            "unit": "iter/sec",
            "range": "stddev: 0.0009452912522281762",
            "extra": "mean: 10.002902225807325 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.40024146806196,
            "unit": "iter/sec",
            "range": "stddev: 0.01113025723066062",
            "extra": "mean: 10.940890132652774 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 153.36741953329542,
            "unit": "iter/sec",
            "range": "stddev: 0.0036132112170318277",
            "extra": "mean: 6.520289661539909 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 418.95218008011926,
            "unit": "iter/sec",
            "range": "stddev: 0.000051307187921423995",
            "extra": "mean: 2.386907259460406 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2226.895865909266,
            "unit": "iter/sec",
            "range": "stddev: 0.00009376890227220152",
            "extra": "mean: 449.05557341438106 usec\nrounds: 504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.0076418679163,
            "unit": "iter/sec",
            "range": "stddev: 0.0007589641526249304",
            "extra": "mean: 9.433282189655559 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.37656266888553,
            "unit": "iter/sec",
            "range": "stddev: 0.00012416200048799743",
            "extra": "mean: 6.010461954248634 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.87573110806922,
            "unit": "iter/sec",
            "range": "stddev: 0.017538228594233683",
            "extra": "mean: 12.213631395609555 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1052399.810175724,
            "unit": "iter/sec",
            "range": "stddev: 2.886315814469803e-7",
            "extra": "mean: 950.2092173819619 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.10266398927156,
            "unit": "iter/sec",
            "range": "stddev: 0.0008281910689730628",
            "extra": "mean: 9.699070434339658 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 177.44485097245826,
            "unit": "iter/sec",
            "range": "stddev: 0.00022493831689541252",
            "extra": "mean: 5.635553776396775 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2197.360936959067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008646657607444242",
            "extra": "mean: 455.091370370815 usec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 87.08813972620366,
            "unit": "iter/sec",
            "range": "stddev: 0.013873997254634543",
            "extra": "mean: 11.482619827957048 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 83.62703824275812,
            "unit": "iter/sec",
            "range": "stddev: 0.0006050561397079473",
            "extra": "mean: 11.957855031253573 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145770.22405993828,
            "unit": "iter/sec",
            "range": "stddev: 3.287898658229473e-7",
            "extra": "mean: 6.860111565643316 usec\nrounds: 33003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.85305922775673,
            "unit": "iter/sec",
            "range": "stddev: 0.0001968536860211718",
            "extra": "mean: 33.497404482761404 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2189.3035204074054,
            "unit": "iter/sec",
            "range": "stddev: 0.00008842795460113228",
            "extra": "mean: 456.76626866881895 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.1707815000309,
            "unit": "iter/sec",
            "range": "stddev: 0.00029389872018258426",
            "extra": "mean: 3.6341067701618885 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7739113367749565,
            "unit": "iter/sec",
            "range": "stddev: 0.0034753893457600197",
            "extra": "mean: 1.292137680999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.7568036860991,
            "unit": "iter/sec",
            "range": "stddev: 0.00037847434840655806",
            "extra": "mean: 3.720836035719393 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10394.906901026136,
            "unit": "iter/sec",
            "range": "stddev: 0.000003219884715549732",
            "extra": "mean: 96.20095778840356 usec\nrounds: 5046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2170.4776445913876,
            "unit": "iter/sec",
            "range": "stddev: 0.000091900718860234",
            "extra": "mean: 460.728080978811 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.77828687412926,
            "unit": "iter/sec",
            "range": "stddev: 0.0008477918009396236",
            "extra": "mean: 27.94991284848479 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2236.5050012786473,
            "unit": "iter/sec",
            "range": "stddev: 0.00008381771546034474",
            "extra": "mean: 447.1262078234939 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.86616303339148,
            "unit": "iter/sec",
            "range": "stddev: 0.0010033444208468192",
            "extra": "mean: 27.125144515154755 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1678238.4384944118,
            "unit": "iter/sec",
            "range": "stddev: 1.0108073561656031e-7",
            "extra": "mean: 595.8628863828933 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4503.237908956992,
            "unit": "iter/sec",
            "range": "stddev: 0.000060824578930565995",
            "extra": "mean: 222.06244045223292 usec\nrounds: 1948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 322.673604571583,
            "unit": "iter/sec",
            "range": "stddev: 0.00005164176801296327",
            "extra": "mean: 3.0991069174304178 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2291.430825215812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000823359356348803",
            "extra": "mean: 436.408548316451 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.05686582860724,
            "unit": "iter/sec",
            "range": "stddev: 0.00019545303238074034",
            "extra": "mean: 9.895418701149934 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.70961939394275,
            "unit": "iter/sec",
            "range": "stddev: 0.0008317802639793633",
            "extra": "mean: 10.340233021976234 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.74021723961008,
            "unit": "iter/sec",
            "range": "stddev: 0.00008636814559873521",
            "extra": "mean: 5.215389939557334 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.159243602068,
            "unit": "iter/sec",
            "range": "stddev: 0.000772326689025691",
            "extra": "mean: 3.8144754549181634 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.81506641743222,
            "unit": "iter/sec",
            "range": "stddev: 0.0009987692007683434",
            "extra": "mean: 10.119914262624908 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.553112634636424,
            "unit": "iter/sec",
            "range": "stddev: 0.00031527758644579333",
            "extra": "mean: 116.91650077779059 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.33133386646321,
            "unit": "iter/sec",
            "range": "stddev: 0.0009202127859508091",
            "extra": "mean: 10.600931408598699 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6174755.463139582,
            "unit": "iter/sec",
            "range": "stddev: 9.908431185608098e-9",
            "extra": "mean: 161.94973322722873 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.37104369838231,
            "unit": "iter/sec",
            "range": "stddev: 0.0009189995345087393",
            "extra": "mean: 9.673888975309334 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.55305581133103,
            "unit": "iter/sec",
            "range": "stddev: 0.00032985149810085503",
            "extra": "mean: 3.6029147547190337 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 227.37847374339796,
            "unit": "iter/sec",
            "range": "stddev: 0.00038611453388326725",
            "extra": "mean: 4.397953700439224 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.77239498166334,
            "unit": "iter/sec",
            "range": "stddev: 0.01670366255464138",
            "extra": "mean: 11.796292887753197 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1910355.7951143691,
            "unit": "iter/sec",
            "range": "stddev: 1.0769502220865975e-7",
            "extra": "mean: 523.4626987064114 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.30633180501195,
            "unit": "iter/sec",
            "range": "stddev: 0.0008022997642659355",
            "extra": "mean: 9.96946037209222 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.88470622339625,
            "unit": "iter/sec",
            "range": "stddev: 0.01919007967109856",
            "extra": "mean: 11.921124183672594 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.7943989218771,
            "unit": "iter/sec",
            "range": "stddev: 0.00008139672644234136",
            "extra": "mean: 1.8559955374461783 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.53949567494261,
            "unit": "iter/sec",
            "range": "stddev: 0.0007284577656195832",
            "extra": "mean: 17.379366785716922 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.0584209213784,
            "unit": "iter/sec",
            "range": "stddev: 0.00026360083697811253",
            "extra": "mean: 10.631690285720197 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.98164226569108,
            "unit": "iter/sec",
            "range": "stddev: 0.0010314435400144042",
            "extra": "mean: 10.205993458329251 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.1663416628523,
            "unit": "iter/sec",
            "range": "stddev: 0.00013072320967687419",
            "extra": "mean: 1.4594995976788172 msec\nrounds: 517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1938279.9054902694,
            "unit": "iter/sec",
            "range": "stddev: 1.2106315913074094e-7",
            "extra": "mean: 515.9213574713604 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1956905.516908506,
            "unit": "iter/sec",
            "range": "stddev: 1.119500679963812e-7",
            "extra": "mean: 511.01087475075815 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.88537962139126,
            "unit": "iter/sec",
            "range": "stddev: 0.0004613355862228802",
            "extra": "mean: 19.6520102127649 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.279090836477366,
            "unit": "iter/sec",
            "range": "stddev: 0.08486505235375137",
            "extra": "mean: 781.805303800013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.74603843368024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000938043793658115",
            "extra": "mean: 6.259936144927672 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 202.37594701827118,
            "unit": "iter/sec",
            "range": "stddev: 0.000029549655561250166",
            "extra": "mean: 4.941298680666416 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.54549878819324,
            "unit": "iter/sec",
            "range": "stddev: 0.00029659875232797235",
            "extra": "mean: 3.551823787999183 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1700123872915915,
            "unit": "iter/sec",
            "range": "stddev: 0.08772139180059901",
            "extra": "mean: 5.881924346400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.153712078825862,
            "unit": "iter/sec",
            "range": "stddev: 0.0008806523157241797",
            "extra": "mean: 41.40150369998992 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9416485657643304,
            "unit": "iter/sec",
            "range": "stddev: 0.004249638231992713",
            "extra": "mean: 1.0619673160000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.949003374657615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948677741843517",
            "extra": "mean: 20.855490826083113 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 246.91199894326482,
            "unit": "iter/sec",
            "range": "stddev: 0.0005585409895954413",
            "extra": "mean: 4.05002593749921 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.2565548220223,
            "unit": "iter/sec",
            "range": "stddev: 0.00022142499082316149",
            "extra": "mean: 9.591723050000192 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.97262244987067,
            "unit": "iter/sec",
            "range": "stddev: 0.000029436646266708467",
            "extra": "mean: 9.176616819146641 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8553.91757513261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001431991377584006",
            "extra": "mean: 116.9054987047262 usec\nrounds: 3475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4500796.119950175,
            "unit": "iter/sec",
            "range": "stddev: 1.3155911142511303e-8",
            "extra": "mean: 222.1829146104593 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11441711.22924288,
            "unit": "iter/sec",
            "range": "stddev: 3.791706468343018e-9",
            "extra": "mean: 87.39951393325815 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14009.049399986798,
            "unit": "iter/sec",
            "range": "stddev: 0.00000183903762332074",
            "extra": "mean: 71.38243084508949 usec\nrounds: 5907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12228.997241216082,
            "unit": "iter/sec",
            "range": "stddev: 0.000050210344379452854",
            "extra": "mean: 81.77285351162263 usec\nrounds: 4799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.8195150143655,
            "unit": "iter/sec",
            "range": "stddev: 0.00001452144674409474",
            "extra": "mean: 1.3213189937114909 msec\nrounds: 636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.8149098650543,
            "unit": "iter/sec",
            "range": "stddev: 0.003928172125894045",
            "extra": "mean: 4.38952832627306 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.051263692829462,
            "unit": "iter/sec",
            "range": "stddev: 0.00013972779678882627",
            "extra": "mean: 52.48995636842617 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5223564791132476,
            "unit": "iter/sec",
            "range": "stddev: 0.0014655851568106028",
            "extra": "mean: 396.45466779999197 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2150.592074133415,
            "unit": "iter/sec",
            "range": "stddev: 0.00008742315648884141",
            "extra": "mean: 464.98822906847727 usec\nrounds: 1266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.70569194354458,
            "unit": "iter/sec",
            "range": "stddev: 0.00010773375490815486",
            "extra": "mean: 7.8305045357107055 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.15684144957708,
            "unit": "iter/sec",
            "range": "stddev: 0.0002298226951850371",
            "extra": "mean: 19.172940159092178 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.22953269506144,
            "unit": "iter/sec",
            "range": "stddev: 0.00028465966702289713",
            "extra": "mean: 3.5307052569148865 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.83236595073981,
            "unit": "iter/sec",
            "range": "stddev: 0.019844607774227585",
            "extra": "mean: 11.928567071429232 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6060235968139067,
            "unit": "iter/sec",
            "range": "stddev: 0.0020928900317221874",
            "extra": "mean: 622.6558576000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.76688171570926,
            "unit": "iter/sec",
            "range": "stddev: 0.0009715482358466039",
            "extra": "mean: 10.552209610525074 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1749.0901874046917,
            "unit": "iter/sec",
            "range": "stddev: 0.000005801046001148537",
            "extra": "mean: 571.7258076233363 usec\nrounds: 1128"
          }
        ]
      }
    ]
  }
}